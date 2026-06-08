
// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        } else {
            // First load: use preselections from client review
            photoSelections = JSON.parse(JSON.stringify(PRESELECCIONES_IVONNE));
            saveSelections();
        }
    } catch (error) {
        photoSelections = JSON.parse(JSON.stringify(PRESELECCIONES_IVONNE));
    }
}

function saveSelections() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections)); }
    catch (e) { showToast('Error al guardar.', 'error'); }
}

function clearAllSelections() {
    if (confirm('¿Borrar TODAS las selecciones?')) {
        photoSelections = {};
        saveSelections(); renderGallery(); updateStats(); updateFilterButtons();
        showToast('Selecciones eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = { impresion: 0, redes_sociales: 0, invitaciones_web: 0, descartada: 0, sinClasificar: photos.length };
    Object.values(photoSelections).forEach(s => {
        if (s.impresion) stats.impresion++;
        if (s.redes_sociales) stats.redes_sociales++;
        if (s.invitaciones_web) stats.invitaciones_web++;
        if (s.descartada) stats.descartada++;
    });
    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;
    return stats;
}

function updateStats() {
    const stats = getStats();
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countRedesSociales').textContent = stats.redes_sociales;
    document.getElementById('countInvitacionesWeb').textContent = stats.invitaciones_web;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';
    photos.forEach((photo, index) => {
        const sel = photoSelections[index] || {};
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;
        if (sel.impresion) card.classList.add('has-impresion');
        else if (sel.redes_sociales) card.classList.add('has-redes_sociales');
        else if (sel.descartada) card.classList.add('has-descartada');
        let badges = '';
        if (sel.impresion || sel.redes_sociales || sel.invitaciones_web || sel.descartada || sel.rating) {
            badges = '<div class="photo-badges">';
            if (sel.rating > 0) badges += '<span class="badge badge-rating"><i class="fas fa-star"></i> ' + '★'.repeat(sel.rating) + '</span>';
            if (sel.impresion) badges += '<span class="badge badge-impresion"><i class="fas fa-camera"></i> Impresión</span>';
            if (sel.redes_sociales) badges += '<span class="badge badge-redes-sociales"><i class="fas fa-share-alt"></i> Redes</span>';
            if (sel.invitaciones_web) badges += '<span class="badge badge-invitaciones-web"><i class="fas fa-globe"></i> Web</span>';
            if (sel.descartada) badges += '<span class="badge badge-descartada"><i class="fas fa-times-circle"></i> Descartada</span>';
            badges += '</div>';
        }
        const fname = photo.split('/').pop();
        card.innerHTML = '<div class="photo-image-container"><img src="' + photo + '" alt="Foto ' + (index+1) + '" loading="lazy"></div>' +
            '<div class="photo-number">#' + (index+1) + ' · ' + fname + '</div>' + badges;
        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });
    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function isPhotoVisible(index) {
    const s = photoSelections[index] || {};
    switch (currentFilter) {
        case 'all': return true;
        case 'impresion': return s.impresion === true;
        case 'redes-sociales': return s.redes_sociales === true;
        case 'invitaciones-web': return s.invitaciones_web === true;
        case 'descartada': return s.descartada === true;
        case 'sin-clasificar': return !s.impresion && !s.redes_sociales && !s.invitaciones_web && !s.descartada;
        default: return true;
    }
}

function applyFilter() {
    document.querySelectorAll('.photo-card').forEach(card => {
        card.classList.toggle('hidden', !isPhotoVisible(parseInt(card.dataset.index)));
    });
}

function setFilter(filter) {
    currentFilter = filter; applyFilter();
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    const btn = document.querySelector('[data-filter="' + filter + '"]');
    if (btn) btn.classList.add('active');
}

function updateFilterButtons() {
    const stats = getStats();
    document.getElementById('btnFilterAll').textContent = 'Todas (' + photos.length + ')';
    document.getElementById('btnFilterImpresion').textContent = 'Impresión (' + stats.impresion + ')';
    document.getElementById('btnFilterRedesSociales').textContent = 'Redes Sociales (' + stats.redes_sociales + ')';
    document.getElementById('btnFilterInvitacionesWeb').textContent = 'Invitaciones Web (' + stats.invitaciones_web + ')';
    document.getElementById('btnFilterDescartada').textContent = 'Descartadas (' + stats.descartada + ')';
    document.getElementById('btnFilterSinClasificar').textContent = 'Sin Clasificar (' + stats.sinClasificar + ')';
}

function findNextVisiblePhoto(startIndex, direction) {
    if (direction === 'next') { for (let i = startIndex + 1; i < photos.length; i++) { if (isPhotoVisible(i)) return i; } }
    else { for (let i = startIndex - 1; i >= 0; i--) { if (isPhotoVisible(i)) return i; } }
    return null;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const fname = photos[index].split('/').pop();
    document.getElementById('modalImage').src = photos[index];
    document.getElementById('modalPhotoNumber').textContent = '#' + (index+1) + ' · ' + fname;
    const sel = photoSelections[index] || {};
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.toggle('selected', sel[btn.dataset.category] === true));
    updateStarDisplay(sel.rating || 0); updateNavigationButtons();
    document.getElementById('photoModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateStarDisplay(rating) {
    document.querySelectorAll('#starRating i').forEach((star, i) => {
        star.classList.toggle('fas', i < rating); star.classList.toggle('far', i >= rating);
    });
}

function setupStarRating() {
    const container = document.getElementById('starRating');
    if (!container) return;
    const stars = container.querySelectorAll('i');
    stars.forEach((star, index) => {
        star.addEventListener('click', (e) => {
            e.stopPropagation(); updateStarDisplay(index + 1);
            if (currentPhotoIndex !== null) {
                if (!photoSelections[currentPhotoIndex]) photoSelections[currentPhotoIndex] = {};
                photoSelections[currentPhotoIndex].rating = index + 1;
            }
        });
        star.addEventListener('mouseenter', () => stars.forEach((s, i) => { if (i <= index) s.style.filter = 'brightness(1.3)'; }));
        star.addEventListener('mouseleave', () => stars.forEach(s => { s.style.filter = ''; }));
    });
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrevPhoto');
    const btnNext = document.getElementById('btnNextPhoto');
    if (!btnPrev || !btnNext) return;
    const prev = findNextVisiblePhoto(currentPhotoIndex, 'prev');
    const next = findNextVisiblePhoto(currentPhotoIndex, 'next');
    btnPrev.disabled = prev === null; btnPrev.style.opacity = prev === null ? '0.3' : '1';
    btnNext.disabled = next === null; btnNext.style.opacity = next === null ? '0.3' : '1';
}

function hasUnsavedChanges() {
    if (currentPhotoIndex === null) return false;
    const saved = photoSelections[currentPhotoIndex] || {};
    const current = {};
    document.querySelectorAll('.option-btn.selected').forEach(btn => { current[btn.dataset.category] = true; });
    const keys = new Set([...Object.keys(saved).filter(k => saved[k]), ...Object.keys(current)]);
    for (const k of keys) { if (!!saved[k] !== !!current[k]) return true; }
    return false;
}

function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;
    const proceed = () => {
        const newIdx = findNextVisiblePhoto(currentPhotoIndex, direction);
        if (newIdx !== null) {
            currentPhotoIndex = newIdx;
            const fname = photos[newIdx].split('/').pop();
            document.getElementById('modalImage').src = photos[newIdx];
            document.getElementById('modalPhotoNumber').textContent = '#' + (newIdx+1) + ' · ' + fname;
            const sel = photoSelections[newIdx] || {};
            document.querySelectorAll('.option-btn').forEach(btn => btn.classList.toggle('selected', sel[btn.dataset.category] === true));
            updateNavigationButtons();
        }
    };
    if (hasUnsavedChanges()) {
        if (confirm('¿Guardar cambios?')) saveModalSelection(proceed); else proceed();
    } else proceed();
}

function closeModal() {
    const doClose = () => {
        document.getElementById('photoModal').classList.remove('active');
        document.body.style.overflow = 'auto'; currentPhotoIndex = null;
    };
    if (hasUnsavedChanges()) {
        if (confirm('¿Guardar cambios?')) saveModalSelection(doClose); else doClose();
    } else doClose();
}

function saveModalSelection(callback) {
    if (currentPhotoIndex === null) return;
    const cats = {}; let hasAny = false;
    document.querySelectorAll('.option-btn').forEach(btn => {
        cats[btn.dataset.category] = btn.classList.contains('selected');
        if (btn.classList.contains('selected')) hasAny = true;
    });
    const rating = photoSelections[currentPhotoIndex] && photoSelections[currentPhotoIndex].rating;
    if (rating > 0) { cats.rating = rating; hasAny = true; }
    if (hasAny) photoSelections[currentPhotoIndex] = cats;
    else delete photoSelections[currentPhotoIndex];
    saveSelections(); renderGallery(); updateStats(); updateFilterButtons();
    showToast('Selección guardada', 'success');
    if (typeof callback === 'function') callback(); else closeModal();
}

// ========================================
// EXPORT / REPORT
// ========================================
function generateTextSummary() {
    const stats = getStats();
    let s = '\uD83D\uDC51 SELECCIÓN DE FOTOS - XV AÑOS IVONNE ANDRADE\n';
    s += '═══════════════════════════════════════════════\n\n';
    s += '📊 RESUMEN:\n';
    s += '   Total de fotos: ' + photos.length + '\n';
    s += '   📸 Para impresión: ' + stats.impresion + '\n';
    s += '   📱 Para redes sociales: ' + stats.redes_sociales + '\n';
    s += '   🌐 Para invitaciones web: ' + stats.invitaciones_web + '\n';
    s += '   ❌ Descartadas: ' + stats.descartada + '\n';
    s += '   ⭕ Sin clasificar: ' + stats.sinClasificar + '\n\n';
    [['impresion', '📸 IMPRESIÓN'], ['redes_sociales', '📱 REDES SOCIALES'], ['invitaciones_web', '🌐 INVITACIONES WEB'], ['descartada', '❌ DESCARTADAS']].forEach(function(pair) {
        const cat = pair[0], label = pair[1];
        const items = [];
        photos.forEach(function(photo, idx) {
            const sel = photoSelections[idx];
            if (sel && sel[cat]) items.push('   • #' + (idx+1) + ' - ' + photo.split('/').pop().replace('.JPG', ''));
        });
        if (items.length > 0) s += label + ':\n' + items.join('\n') + '\n   Total: ' + items.length + '\n\n';
    });
    s += '\n📅 Generado el: ' + new Date().toLocaleString('es-MX') + '\n';
    return s;
}

function exportToJSON() {
    window.open('https://wa.me/524779203776?text=' + encodeURIComponent(generateTextSummary()), '_blank');
    showToast('Abriendo WhatsApp...', 'success');
}

function copyToClipboard() {
    const text = generateTextSummary();
    navigator.clipboard.writeText(text).then(function() { showToast('Copiado al portapapeles', 'success'); }).catch(function() {
        const ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy');
        document.body.removeChild(ta); showToast('Copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST
// ========================================
function showToast(message, type) {
    type = type || 'success';
    const toast = document.getElementById('toast');
    toast.textContent = message; toast.className = 'toast ' + type;
    setTimeout(function() { toast.classList.add('show'); }, 100);
    setTimeout(function() { toast.classList.remove('show'); }, 3000);
}

// ========================================
// FEEDBACK
// ========================================
const FEEDBACK_KEY = 'ivonne_xv_feedback';
let feedbackData = { photos: [] };

function loadFeedback() {
    try { const s = localStorage.getItem(FEEDBACK_KEY); if (s) { feedbackData = JSON.parse(s); renderFeedbackLists(); } } catch(e) {}
}
function saveFeedback() {
    try { localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbackData)); } catch(e) {}
}
function addPhotoFeedback() {
    const num = document.getElementById('photoNumber').value.trim();
    const change = document.getElementById('photoChange').value.trim();
    if (!num || !change) { showToast('Completa ambos campos', 'error'); return; }
    feedbackData.photos.push({ photoNumber: parseInt(num), change: change });
    saveFeedback(); renderFeedbackLists();
    document.getElementById('photoNumber').value = '';
    document.getElementById('photoChange').value = '';
    showToast('Sugerencia agregada', 'success');
}
function removePhotoFeedback(index) {
    feedbackData.photos.splice(index, 1); saveFeedback(); renderFeedbackLists();
}
function renderFeedbackLists() {
    const el = document.getElementById('photoFeedbackList');
    if (!el) return;
    if (feedbackData.photos.length === 0) {
        el.innerHTML = '<p style="color:rgba(250,248,243,0.5);font-style:italic;text-align:center;">Sin sugerencias</p>';
    } else {
        el.innerHTML = feedbackData.photos.map(function(item, i) {
            return '<div style="display:flex;align-items:center;gap:10px;padding:12px;background:rgba(255,255,255,0.08);border-radius:10px;margin-bottom:10px;">' +
                '<span style="color:var(--gold);min-width:70px;font-weight:600;"><i class="fas fa-camera"></i> #' + item.photoNumber + '</span>' +
                '<span style="flex:1;color:var(--cream);">' + item.change + '</span>' +
                '<button onclick="removePhotoFeedback(' + i + ')" style="padding:8px 12px;background:#f44336;color:white;border:none;border-radius:8px;cursor:pointer;"><i class="fas fa-trash-alt"></i></button></div>';
        }).join('');
    }
}

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    loadSelections(); renderGallery(); updateStats(); updateFilterButtons(); loadFeedback(); setupStarRating();

    var filters = [
        ['btnFilterAll', 'all'],
        ['btnFilterImpresion', 'impresion'],
        ['btnFilterRedesSociales', 'redes-sociales'],
        ['btnFilterInvitacionesWeb', 'invitaciones-web'],
        ['btnFilterDescartada', 'descartada'],
        ['btnFilterSinClasificar', 'sin-clasificar']
    ];
    filters.forEach(function(pair) {
        var btn = document.getElementById(pair[0]);
        btn.dataset.filter = pair[1];
        btn.addEventListener('click', function() { setFilter(pair[1]); });
    });

    // Default filter: impresion
    document.getElementById('btnFilterImpresion').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', function() { saveModalSelection(); });
    document.getElementById('btnPrevPhoto').addEventListener('click', function(e) { e.stopPropagation(); navigatePhoto('prev'); });
    document.getElementById('btnNextPhoto').addEventListener('click', function(e) { e.stopPropagation(); navigatePhoto('next'); });
    document.getElementById('photoModal').addEventListener('click', function(e) { if (e.target.id === 'photoModal') closeModal(); });

    document.querySelectorAll('.option-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var cat = btn.dataset.category;
            var sel = btn.classList.contains('selected');
            if (cat === 'descartada' && !sel) document.querySelectorAll('.option-btn').forEach(function(b) { if (b !== btn) b.classList.remove('selected'); });
            if (cat !== 'descartada' && !sel) { var d = document.querySelector('.option-btn[data-category="descartada"]'); if (d) d.classList.remove('selected'); }
            btn.classList.toggle('selected');
        });
    });

    document.addEventListener('keydown', function(e) {
        var modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
            else if (e.key === 'Enter') saveModalSelection();
            else if (e.key === 'ArrowLeft') { e.preventDefault(); navigatePhoto('prev'); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); navigatePhoto('next'); }
        }
    });

    console.log('✅ Selector XV Años Ivonne Andrade - 145 preseleccionadas para impresión');
});

document.addEventListener('visibilitychange', function() { if (document.hidden) saveSelections(); });
window.addEventListener('beforeunload', function() { saveSelections(); });
