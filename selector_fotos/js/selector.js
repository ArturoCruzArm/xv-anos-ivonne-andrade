// ========================================
// SELECTOR DE FOTOS - XV AÑOS IVONNE ANDRADE
// ========================================

const TOTAL_PHOTOS = 632;
const STORAGE_KEY = 'ivonne_xv_photo_selections';

const photos = [
    'file:///F:/2026/03/14/myf/DJI_20260314155107_0031_D.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314155122_0032_D.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314155134_0033_D.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314170440_0043_D.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161200_632.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161205_402.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161213_307.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161221_121.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161226_281.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161258_906.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161309_166.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161329_626.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161340_365.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161427_180.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161433_749.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161538_624.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161541_819.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161548_674.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161557_685.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161602_624.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161641_159.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161852_432.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161859_529.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161907_120.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161913_991.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_161924_085.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_171735_595.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_171738_126.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_171740_363.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_171743_004.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_171816_423.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_171818_867.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_202424_570.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_202427_992.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203108_276.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203328_865.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203330_893.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203333_697.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203339_333.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203355_174.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203434_758.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203602_030.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203622_957.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203637_545.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203639_709.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_203742_023.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_204054_974.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_204104_194.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_205149_961.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_205210_061.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_205916_187.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_210243_454.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_210311_567.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_210315_588.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_210553_299.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_210555_774.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_210558_158.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_210750_751.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_210922_715.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_210945_153.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_210950_208.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_211123_628.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_211126_070.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_211127_858.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_212255_499.JPG',
    'file:///F:/2026/03/14/myf/DJI_20260314_212301_391.JPG',
    'file:///F:/2026/03/14/DSC_0760.JPG',
    'file:///F:/2026/03/14/DSC_0761.JPG',
    'file:///F:/2026/03/14/DSC_0762.JPG',
    'file:///F:/2026/03/14/DSC_0763.JPG',
    'file:///F:/2026/03/14/DSC_0764.JPG',
    'file:///F:/2026/03/14/DSC_0765.JPG',
    'file:///F:/2026/03/14/DSC_0766.JPG',
    'file:///F:/2026/03/14/DSC_0767.JPG',
    'file:///F:/2026/03/14/DSC_0768.JPG',
    'file:///F:/2026/03/14/DSC_0769.JPG',
    'file:///F:/2026/03/14/DSC_0770.JPG',
    'file:///F:/2026/03/14/DSC_0771.JPG',
    'file:///F:/2026/03/14/DSC_0772.JPG',
    'file:///F:/2026/03/14/DSC_0773.JPG',
    'file:///F:/2026/03/14/DSC_0774.JPG',
    'file:///F:/2026/03/14/DSC_0775.JPG',
    'file:///F:/2026/03/14/DSC_0776.JPG',
    'file:///F:/2026/03/14/DSC_0777.JPG',
    'file:///F:/2026/03/14/DSC_0778.JPG',
    'file:///F:/2026/03/14/DSC_0779.JPG',
    'file:///F:/2026/03/14/DSC_0780.JPG',
    'file:///F:/2026/03/14/DSC_0781.JPG',
    'file:///F:/2026/03/14/DSC_0782.JPG',
    'file:///F:/2026/03/14/DSC_0783.JPG',
    'file:///F:/2026/03/14/DSC_0784.JPG',
    'file:///F:/2026/03/14/DSC_0785.JPG',
    'file:///F:/2026/03/14/DSC_0786.JPG',
    'file:///F:/2026/03/14/DSC_0787.JPG',
    'file:///F:/2026/03/14/DSC_0788.JPG',
    'file:///F:/2026/03/14/DSC_0789.JPG',
    'file:///F:/2026/03/14/DSC_0790.JPG',
    'file:///F:/2026/03/14/DSC_0791.JPG',
    'file:///F:/2026/03/14/DSC_0792.JPG',
    'file:///F:/2026/03/14/DSC_0793.JPG',
    'file:///F:/2026/03/14/DSC_0794.JPG',
    'file:///F:/2026/03/14/DSC_0795.JPG',
    'file:///F:/2026/03/14/DSC_0796.JPG',
    'file:///F:/2026/03/14/DSC_0797.JPG',
    'file:///F:/2026/03/14/DSC_0798.JPG',
    'file:///F:/2026/03/14/DSC_0799.JPG',
    'file:///F:/2026/03/14/DSC_0800.JPG',
    'file:///F:/2026/03/14/DSC_0801.JPG',
    'file:///F:/2026/03/14/DSC_0802.JPG',
    'file:///F:/2026/03/14/DSC_0803.JPG',
    'file:///F:/2026/03/14/DSC_0804.JPG',
    'file:///F:/2026/03/14/DSC_0805.JPG',
    'file:///F:/2026/03/14/DSC_0806.JPG',
    'file:///F:/2026/03/14/DSC_0807.JPG',
    'file:///F:/2026/03/14/DSC_0808.JPG',
    'file:///F:/2026/03/14/DSC_0809.JPG',
    'file:///F:/2026/03/14/DSC_0810.JPG',
    'file:///F:/2026/03/14/DSC_0811.JPG',
    'file:///F:/2026/03/14/DSC_0812.JPG',
    'file:///F:/2026/03/14/DSC_0813.JPG',
    'file:///F:/2026/03/14/DSC_0814.JPG',
    'file:///F:/2026/03/14/DSC_0815.JPG',
    'file:///F:/2026/03/14/DSC_0816.JPG',
    'file:///F:/2026/03/14/DSC_0817.JPG',
    'file:///F:/2026/03/14/DSC_0818.JPG',
    'file:///F:/2026/03/14/DSC_0819.JPG',
    'file:///F:/2026/03/14/DSC_0820.JPG',
    'file:///F:/2026/03/14/DSC_0821.JPG',
    'file:///F:/2026/03/14/DSC_0822.JPG',
    'file:///F:/2026/03/14/DSC_0823.JPG',
    'file:///F:/2026/03/14/DSC_0824.JPG',
    'file:///F:/2026/03/14/DSC_0825.JPG',
    'file:///F:/2026/03/14/DSC_0826.JPG',
    'file:///F:/2026/03/14/DSC_0827.JPG',
    'file:///F:/2026/03/14/DSC_0828.JPG',
    'file:///F:/2026/03/14/DSC_0829.JPG',
    'file:///F:/2026/03/14/DSC_0830.JPG',
    'file:///F:/2026/03/14/DSC_0831.JPG',
    'file:///F:/2026/03/14/DSC_0832.JPG',
    'file:///F:/2026/03/14/DSC_0833.JPG',
    'file:///F:/2026/03/14/DSC_0834.JPG',
    'file:///F:/2026/03/14/DSC_0835.JPG',
    'file:///F:/2026/03/14/DSC_0836.JPG',
    'file:///F:/2026/03/14/DSC_0837.JPG',
    'file:///F:/2026/03/14/DSC_0838.JPG',
    'file:///F:/2026/03/14/DSC_0839.JPG',
    'file:///F:/2026/03/14/DSC_0840.JPG',
    'file:///F:/2026/03/14/DSC_0841.JPG',
    'file:///F:/2026/03/14/DSC_0842.JPG',
    'file:///F:/2026/03/14/DSC_0843.JPG',
    'file:///F:/2026/03/14/DSC_0844.JPG',
    'file:///F:/2026/03/14/DSC_0845.JPG',
    'file:///F:/2026/03/14/DSC_0846.JPG',
    'file:///F:/2026/03/14/DSC_0847.JPG',
    'file:///F:/2026/03/14/DSC_0848.JPG',
    'file:///F:/2026/03/14/DSC_0849.JPG',
    'file:///F:/2026/03/14/DSC_0850.JPG',
    'file:///F:/2026/03/14/DSC_0851.JPG',
    'file:///F:/2026/03/14/DSC_0852.JPG',
    'file:///F:/2026/03/14/DSC_0853.JPG',
    'file:///F:/2026/03/14/DSC_0854.JPG',
    'file:///F:/2026/03/14/DSC_0855.JPG',
    'file:///F:/2026/03/14/DSC_0856.JPG',
    'file:///F:/2026/03/14/DSC_0857.JPG',
    'file:///F:/2026/03/14/DSC_0858.JPG',
    'file:///F:/2026/03/14/DSC_0859.JPG',
    'file:///F:/2026/03/14/DSC_0860.JPG',
    'file:///F:/2026/03/14/DSC_0861.JPG',
    'file:///F:/2026/03/14/DSC_0862.JPG',
    'file:///F:/2026/03/14/DSC_0863.JPG',
    'file:///F:/2026/03/14/DSC_0864.JPG',
    'file:///F:/2026/03/14/DSC_0865.JPG',
    'file:///F:/2026/03/14/DSC_0866.JPG',
    'file:///F:/2026/03/14/DSC_0867.JPG',
    'file:///F:/2026/03/14/DSC_0868.JPG',
    'file:///F:/2026/03/14/DSC_0869.JPG',
    'file:///F:/2026/03/14/DSC_0870.JPG',
    'file:///F:/2026/03/14/DSC_0871.JPG',
    'file:///F:/2026/03/14/DSC_0872.JPG',
    'file:///F:/2026/03/14/DSC_0873.JPG',
    'file:///F:/2026/03/14/DSC_0874.JPG',
    'file:///F:/2026/03/14/DSC_0875.JPG',
    'file:///F:/2026/03/14/myf/DSC_1128.JPG',
    'file:///F:/2026/03/14/myf/DSC_1129.JPG',
    'file:///F:/2026/03/14/myf/DSC_1130.JPG',
    'file:///F:/2026/03/14/myf/DSC_1131.JPG',
    'file:///F:/2026/03/14/myf/DSC_1132.JPG',
    'file:///F:/2026/03/14/myf/DSC_1133.JPG',
    'file:///F:/2026/03/14/myf/DSC_1134.JPG',
    'file:///F:/2026/03/14/myf/DSC_1135.JPG',
    'file:///F:/2026/03/14/myf/DSC_1136.JPG',
    'file:///F:/2026/03/14/myf/DSC_1137.JPG',
    'file:///F:/2026/03/14/myf/DSC_1138.JPG',
    'file:///F:/2026/03/14/myf/DSC_1139.JPG',
    'file:///F:/2026/03/14/myf/DSC_1140.JPG',
    'file:///F:/2026/03/14/myf/DSC_1141.JPG',
    'file:///F:/2026/03/14/myf/DSC_1142.JPG',
    'file:///F:/2026/03/14/myf/DSC_1143.JPG',
    'file:///F:/2026/03/14/myf/DSC_1144.JPG',
    'file:///F:/2026/03/14/myf/DSC_1145.JPG',
    'file:///F:/2026/03/14/myf/DSC_1146.JPG',
    'file:///F:/2026/03/14/myf/DSC_1147.JPG',
    'file:///F:/2026/03/14/myf/DSC_1148.JPG',
    'file:///F:/2026/03/14/myf/DSC_1149.JPG',
    'file:///F:/2026/03/14/myf/DSC_1150.JPG',
    'file:///F:/2026/03/14/myf/DSC_1151.JPG',
    'file:///F:/2026/03/14/myf/DSC_1152.JPG',
    'file:///F:/2026/03/14/myf/DSC_1153.JPG',
    'file:///F:/2026/03/14/myf/DSC_1154.JPG',
    'file:///F:/2026/03/14/myf/DSC_1155.JPG',
    'file:///F:/2026/03/14/myf/DSC_1156.JPG',
    'file:///F:/2026/03/14/myf/DSC_1157.JPG',
    'file:///F:/2026/03/14/myf/DSC_1158.JPG',
    'file:///F:/2026/03/14/myf/DSC_1159.JPG',
    'file:///F:/2026/03/14/myf/DSC_1160.JPG',
    'file:///F:/2026/03/14/myf/DSC_1161.JPG',
    'file:///F:/2026/03/14/myf/DSC_1162.JPG',
    'file:///F:/2026/03/14/myf/DSC_1163.JPG',
    'file:///F:/2026/03/14/myf/DSC_1164.JPG',
    'file:///F:/2026/03/14/myf/DSC_1165.JPG',
    'file:///F:/2026/03/14/myf/DSC_1166.JPG',
    'file:///F:/2026/03/14/myf/DSC_1167.JPG',
    'file:///F:/2026/03/14/myf/DSC_1168.JPG',
    'file:///F:/2026/03/14/myf/DSC_1169.JPG',
    'file:///F:/2026/03/14/myf/DSC_1170.JPG',
    'file:///F:/2026/03/14/myf/DSC_1171.JPG',
    'file:///F:/2026/03/14/myf/DSC_1172.JPG',
    'file:///F:/2026/03/14/myf/DSC_1173.JPG',
    'file:///F:/2026/03/14/myf/DSC_1174.JPG',
    'file:///F:/2026/03/14/myf/DSC_1175.JPG',
    'file:///F:/2026/03/14/myf/DSC_1176.JPG',
    'file:///F:/2026/03/14/myf/DSC_1177.JPG',
    'file:///F:/2026/03/14/myf/DSC_1178.JPG',
    'file:///F:/2026/03/14/myf/DSC_1179.JPG',
    'file:///F:/2026/03/14/myf/DSC_1180.JPG',
    'file:///F:/2026/03/14/myf/DSC_1181.JPG',
    'file:///F:/2026/03/14/myf/DSC_1182.JPG',
    'file:///F:/2026/03/14/myf/DSC_1183.JPG',
    'file:///F:/2026/03/14/myf/DSC_1184.JPG',
    'file:///F:/2026/03/14/myf/DSC_1185.JPG',
    'file:///F:/2026/03/14/myf/DSC_1186.JPG',
    'file:///F:/2026/03/14/myf/DSC_1187.JPG',
    'file:///F:/2026/03/14/myf/DSC_1188.JPG',
    'file:///F:/2026/03/14/myf/DSC_1189.JPG',
    'file:///F:/2026/03/14/myf/DSC_1190.JPG',
    'file:///F:/2026/03/14/myf/DSC_1191.JPG',
    'file:///F:/2026/03/14/myf/DSC_1192.JPG',
    'file:///F:/2026/03/14/myf/DSC_1193.JPG',
    'file:///F:/2026/03/14/myf/DSC_1194.JPG',
    'file:///F:/2026/03/14/myf/DSC_1195.JPG',
    'file:///F:/2026/03/14/myf/DSC_1196.JPG',
    'file:///F:/2026/03/14/myf/DSC_1197.JPG',
    'file:///F:/2026/03/14/myf/DSC_1198.JPG',
    'file:///F:/2026/03/14/myf/DSC_1199.JPG',
    'file:///F:/2026/03/14/myf/DSC_1200.JPG',
    'file:///F:/2026/03/14/myf/DSC_1201.JPG',
    'file:///F:/2026/03/14/myf/DSC_1202.JPG',
    'file:///F:/2026/03/14/myf/DSC_1203.JPG',
    'file:///F:/2026/03/14/myf/DSC_1204.JPG',
    'file:///F:/2026/03/14/myf/DSC_1205.JPG',
    'file:///F:/2026/03/14/myf/DSC_1206.JPG',
    'file:///F:/2026/03/14/myf/DSC_1207.JPG',
    'file:///F:/2026/03/14/myf/DSC_1208.JPG',
    'file:///F:/2026/03/14/myf/DSC_1209.JPG',
    'file:///F:/2026/03/14/myf/DSC_1210.JPG',
    'file:///F:/2026/03/14/myf/DSC_1211.JPG',
    'file:///F:/2026/03/14/myf/DSC_1212.JPG',
    'file:///F:/2026/03/14/myf/DSC_1213.JPG',
    'file:///F:/2026/03/14/myf/DSC_1214.JPG',
    'file:///F:/2026/03/14/myf/DSC_1215.JPG',
    'file:///F:/2026/03/14/myf/DSC_1216.JPG',
    'file:///F:/2026/03/14/myf/DSC_1217.JPG',
    'file:///F:/2026/03/14/myf/DSC_1218.JPG',
    'file:///F:/2026/03/14/myf/DSC_1219.JPG',
    'file:///F:/2026/03/14/myf/DSC_1220.JPG',
    'file:///F:/2026/03/14/myf/DSC_1221.JPG',
    'file:///F:/2026/03/14/myf/DSC_1222.JPG',
    'file:///F:/2026/03/14/myf/DSC_1223.JPG',
    'file:///F:/2026/03/14/myf/DSC_1224.JPG',
    'file:///F:/2026/03/14/myf/DSC_1225.JPG',
    'file:///F:/2026/03/14/myf/DSC_1226.JPG',
    'file:///F:/2026/03/14/myf/DSC_1227.JPG',
    'file:///F:/2026/03/14/myf/DSC_1228.JPG',
    'file:///F:/2026/03/14/myf/DSC_1229.JPG',
    'file:///F:/2026/03/14/myf/DSC_1230.JPG',
    'file:///F:/2026/03/14/myf/DSC_1231.JPG',
    'file:///F:/2026/03/14/myf/DSC_1232.JPG',
    'file:///F:/2026/03/14/myf/DSC_1233.JPG',
    'file:///F:/2026/03/14/myf/DSC_1234.JPG',
    'file:///F:/2026/03/14/myf/DSC_1235.JPG',
    'file:///F:/2026/03/14/myf/DSC_1236.JPG',
    'file:///F:/2026/03/14/myf/DSC_1237.JPG',
    'file:///F:/2026/03/14/myf/DSC_1238.JPG',
    'file:///F:/2026/03/14/myf/DSC_1239.JPG',
    'file:///F:/2026/03/14/myf/DSC_1240.JPG',
    'file:///F:/2026/03/14/myf/DSC_1242.JPG',
    'file:///F:/2026/03/14/myf/DSC_1243.JPG',
    'file:///F:/2026/03/14/myf/DSC_1244.JPG',
    'file:///F:/2026/03/14/myf/DSC_1245.JPG',
    'file:///F:/2026/03/14/myf/DSC_1246.JPG',
    'file:///F:/2026/03/14/myf/DSC_1247.JPG',
    'file:///F:/2026/03/14/myf/DSC_1248.JPG',
    'file:///F:/2026/03/14/myf/DSC_1249.JPG',
    'file:///F:/2026/03/14/myf/DSC_1250.JPG',
    'file:///F:/2026/03/14/myf/DSC_1251.JPG',
    'file:///F:/2026/03/14/myf/DSC_1252.JPG',
    'file:///F:/2026/03/14/myf/DSC_1253.JPG',
    'file:///F:/2026/03/14/myf/DSC_1254.JPG',
    'file:///F:/2026/03/14/myf/DSC_1255.JPG',
    'file:///F:/2026/03/14/myf/DSC_1256.JPG',
    'file:///F:/2026/03/14/myf/DSC_1257.JPG',
    'file:///F:/2026/03/14/myf/DSC_1258.JPG',
    'file:///F:/2026/03/14/myf/DSC_1259.JPG',
    'file:///F:/2026/03/14/myf/DSC_1262.JPG',
    'file:///F:/2026/03/14/myf/DSC_1263.JPG',
    'file:///F:/2026/03/14/myf/DSC_1264.JPG',
    'file:///F:/2026/03/14/myf/DSC_1265.JPG',
    'file:///F:/2026/03/14/myf/DSC_1266.JPG',
    'file:///F:/2026/03/14/myf/DSC_1267.JPG',
    'file:///F:/2026/03/14/myf/DSC_1268.JPG',
    'file:///F:/2026/03/14/myf/DSC_1271.JPG',
    'file:///F:/2026/03/14/myf/DSC_1272.JPG',
    'file:///F:/2026/03/14/myf/DSC_1273.JPG',
    'file:///F:/2026/03/14/myf/DSC_1274.JPG',
    'file:///F:/2026/03/14/myf/DSC_1275.JPG',
    'file:///F:/2026/03/14/myf/DSC_1276.JPG',
    'file:///F:/2026/03/14/myf/DSC_1277.JPG',
    'file:///F:/2026/03/14/myf/DSC_1278.JPG',
    'file:///F:/2026/03/14/myf/DSC_1279.JPG',
    'file:///F:/2026/03/14/myf/DSC_1280.JPG',
    'file:///F:/2026/03/14/myf/DSC_1281.JPG',
    'file:///F:/2026/03/14/myf/DSC_1282.JPG',
    'file:///F:/2026/03/14/myf/DSC_1283.JPG',
    'file:///F:/2026/03/14/myf/DSC_1284.JPG',
    'file:///F:/2026/03/14/myf/DSC_1285.JPG',
    'file:///F:/2026/03/14/myf/DSC_1286.JPG',
    'file:///F:/2026/03/14/myf/DSC_1287.JPG',
    'file:///F:/2026/03/14/myf/DSC_1288.JPG',
    'file:///F:/2026/03/14/myf/DSC_1289.JPG',
    'file:///F:/2026/03/14/myf/DSC_1290.JPG',
    'file:///F:/2026/03/14/myf/DSC_1291.JPG',
    'file:///F:/2026/03/14/myf/DSC_1292.JPG',
    'file:///F:/2026/03/14/myf/DSC_1293.JPG',
    'file:///F:/2026/03/14/myf/DSC_1294.JPG',
    'file:///F:/2026/03/14/myf/DSC_1295.JPG',
    'file:///F:/2026/03/14/myf/DSC_1296.JPG',
    'file:///F:/2026/03/14/myf/DSC_1297.JPG',
    'file:///F:/2026/03/14/myf/DSC_1298.JPG',
    'file:///F:/2026/03/14/myf/DSC_1299.JPG',
    'file:///F:/2026/03/14/myf/DSC_1300.JPG',
    'file:///F:/2026/03/14/myf/DSC_1301.JPG',
    'file:///F:/2026/03/14/myf/DSC_1302.JPG',
    'file:///F:/2026/03/14/myf/DSC_1303.JPG',
    'file:///F:/2026/03/14/myf/DSC_1304.JPG',
    'file:///F:/2026/03/14/myf/DSC_1305.JPG',
    'file:///F:/2026/03/14/myf/DSC_1306.JPG',
    'file:///F:/2026/03/14/myf/DSC_1307.JPG',
    'file:///F:/2026/03/14/myf/DSC_1308.JPG',
    'file:///F:/2026/03/14/myf/DSC_1309.JPG',
    'file:///F:/2026/03/14/myf/DSC_1310.JPG',
    'file:///F:/2026/03/14/myf/DSC_1311.JPG',
    'file:///F:/2026/03/14/myf/DSC_1312.JPG',
    'file:///F:/2026/03/14/myf/DSC_1313.JPG',
    'file:///F:/2026/03/14/myf/DSC_1314.JPG',
    'file:///F:/2026/03/14/myf/DSC_1315.JPG',
    'file:///F:/2026/03/14/myf/DSC_1316.JPG',
    'file:///F:/2026/03/14/myf/DSC_1317.JPG',
    'file:///F:/2026/03/14/myf/DSC_1318.JPG',
    'file:///F:/2026/03/14/myf/DSC_1319.JPG',
    'file:///F:/2026/03/14/myf/DSC_1320.JPG',
    'file:///F:/2026/03/14/myf/DSC_1321.JPG',
    'file:///F:/2026/03/14/myf/DSC_1322.JPG',
    'file:///F:/2026/03/14/myf/DSC_1323.JPG',
    'file:///F:/2026/03/14/myf/DSC_1324.JPG',
    'file:///F:/2026/03/14/myf/DSC_1325.JPG',
    'file:///F:/2026/03/14/myf/DSC_1326.JPG',
    'file:///F:/2026/03/14/myf/DSC_1327.JPG',
    'file:///F:/2026/03/14/myf/DSC_1328.JPG',
    'file:///F:/2026/03/14/myf/DSC_1329.JPG',
    'file:///F:/2026/03/14/myf/DSC_1330.JPG',
    'file:///F:/2026/03/14/myf/DSC_1331.JPG',
    'file:///F:/2026/03/14/myf/DSC_1332.JPG',
    'file:///F:/2026/03/14/myf/DSC_1333.JPG',
    'file:///F:/2026/03/14/myf/DSC_1334.JPG',
    'file:///F:/2026/03/14/myf/DSC_1335.JPG',
    'file:///F:/2026/03/14/myf/DSC_1336.JPG',
    'file:///F:/2026/03/14/myf/DSC_1337.JPG',
    'file:///F:/2026/03/14/myf/DSC_1338.JPG',
    'file:///F:/2026/03/14/myf/DSC_1339.JPG',
    'file:///F:/2026/03/14/myf/DSC_1340.JPG',
    'file:///F:/2026/03/14/myf/DSC_1341.JPG',
    'file:///F:/2026/03/14/myf/DSC_1342.JPG',
    'file:///F:/2026/03/14/myf/DSC_1343.JPG',
    'file:///F:/2026/03/14/myf/DSC_1344.JPG',
    'file:///F:/2026/03/14/myf/DSC_1345.JPG',
    'file:///F:/2026/03/14/myf/DSC_1346.JPG',
    'file:///F:/2026/03/14/myf/DSC_1347.JPG',
    'file:///F:/2026/03/14/myf/DSC_1348.JPG',
    'file:///F:/2026/03/14/myf/DSC_1349.JPG',
    'file:///F:/2026/03/14/myf/DSC_1350.JPG',
    'file:///F:/2026/03/14/myf/DSC_1351.JPG',
    'file:///F:/2026/03/14/myf/DSC_1352.JPG',
    'file:///F:/2026/03/14/myf/DSC_1353.JPG',
    'file:///F:/2026/03/14/myf/DSC_1354.JPG',
    'file:///F:/2026/03/14/myf/DSC_1355.JPG',
    'file:///F:/2026/03/14/myf/DSC_1356.JPG',
    'file:///F:/2026/03/14/myf/DSC_1357.JPG',
    'file:///F:/2026/03/14/myf/DSC_1358.JPG',
    'file:///F:/2026/03/14/myf/DSC_1359.JPG',
    'file:///F:/2026/03/14/myf/DSC_1360.JPG',
    'file:///F:/2026/03/14/myf/DSC_1361.JPG',
    'file:///F:/2026/03/14/myf/DSC_1362.JPG',
    'file:///F:/2026/03/14/myf/DSC_1363.JPG',
    'file:///F:/2026/03/14/myf/DSC_1364.JPG',
    'file:///F:/2026/03/14/myf/DSC_1365.JPG',
    'file:///F:/2026/03/14/myf/DSC_1366.JPG',
    'file:///F:/2026/03/14/myf/DSC_1367.JPG',
    'file:///F:/2026/03/14/myf/DSC_1368.JPG',
    'file:///F:/2026/03/14/myf/DSC_1369.JPG',
    'file:///F:/2026/03/14/myf/DSC_1370.JPG',
    'file:///F:/2026/03/14/myf/DSC_1371.JPG',
    'file:///F:/2026/03/14/myf/DSC_1372.JPG',
    'file:///F:/2026/03/14/myf/DSC_1373.JPG',
    'file:///F:/2026/03/14/myf/DSC_1374.JPG',
    'file:///F:/2026/03/14/myf/DSC_1375.JPG',
    'file:///F:/2026/03/14/myf/DSC_1376.JPG',
    'file:///F:/2026/03/14/myf/DSC_1377.JPG',
    'file:///F:/2026/03/14/myf/DSC_1378.JPG',
    'file:///F:/2026/03/14/myf/DSC_1379.JPG',
    'file:///F:/2026/03/14/myf/DSC_1380.JPG',
    'file:///F:/2026/03/14/myf/DSC_1381.JPG',
    'file:///F:/2026/03/14/myf/DSC_1382.JPG',
    'file:///F:/2026/03/14/myf/DSC_1383.JPG',
    'file:///F:/2026/03/14/myf/DSC_1384.JPG',
    'file:///F:/2026/03/14/myf/DSC_1385.JPG',
    'file:///F:/2026/03/14/myf/DSC_1386.JPG',
    'file:///F:/2026/03/14/myf/DSC_1387.JPG',
    'file:///F:/2026/03/14/myf/DSC_1388.JPG',
    'file:///F:/2026/03/14/myf/DSC_1389.JPG',
    'file:///F:/2026/03/14/myf/DSC_1390.JPG',
    'file:///F:/2026/03/14/myf/DSC_1391.JPG',
    'file:///F:/2026/03/14/myf/DSC_1392.JPG',
    'file:///F:/2026/03/14/myf/DSC_1393.JPG',
    'file:///F:/2026/03/14/myf/DSC_1394.JPG',
    'file:///F:/2026/03/14/myf/DSC_1395.JPG',
    'file:///F:/2026/03/14/myf/DSC_1396.JPG',
    'file:///F:/2026/03/14/myf/DSC_1397.JPG',
    'file:///F:/2026/03/14/myf/DSC_1398.JPG',
    'file:///F:/2026/03/14/myf/DSC_1399.JPG',
    'file:///F:/2026/03/14/myf/DSC_1400.JPG',
    'file:///F:/2026/03/14/myf/DSC_1401.JPG',
    'file:///F:/2026/03/14/myf/DSC_1402.JPG',
    'file:///F:/2026/03/14/myf/DSC_1403.JPG',
    'file:///F:/2026/03/14/myf/DSC_1404.JPG',
    'file:///F:/2026/03/14/myf/DSC_1405.JPG',
    'file:///F:/2026/03/14/myf/DSC_1406.JPG',
    'file:///F:/2026/03/14/myf/DSC_1407.JPG',
    'file:///F:/2026/03/14/myf/DSC_1408.JPG',
    'file:///F:/2026/03/14/myf/DSC_1409.JPG',
    'file:///F:/2026/03/14/myf/DSC_1410.JPG',
    'file:///F:/2026/03/14/myf/DSC_1411.JPG',
    'file:///F:/2026/03/14/myf/DSC_1412.JPG',
    'file:///F:/2026/03/14/myf/DSC_1413.JPG',
    'file:///F:/2026/03/14/myf/DSC_1414.JPG',
    'file:///F:/2026/03/14/myf/DSC_1415.JPG',
    'file:///F:/2026/03/14/myf/DSC_1416.JPG',
    'file:///F:/2026/03/14/myf/DSC_1419.JPG',
    'file:///F:/2026/03/14/myf/DSC_1420.JPG',
    'file:///F:/2026/03/14/myf/DSC_1421.JPG',
    'file:///F:/2026/03/14/myf/DSC_1422.JPG',
    'file:///F:/2026/03/14/myf/DSC_1423.JPG',
    'file:///F:/2026/03/14/myf/DSC_1424.JPG',
    'file:///F:/2026/03/14/myf/DSC_1425.JPG',
    'file:///F:/2026/03/14/myf/DSC_1426.JPG',
    'file:///F:/2026/03/14/myf/DSC_1427.JPG',
    'file:///F:/2026/03/14/myf/DSC_1428.JPG',
    'file:///F:/2026/03/14/myf/DSC_1429.JPG',
    'file:///F:/2026/03/14/myf/DSC_1430.JPG',
    'file:///F:/2026/03/14/myf/DSC_1431.JPG',
    'file:///F:/2026/03/14/myf/DSC_1432.JPG',
    'file:///F:/2026/03/14/myf/DSC_1433.JPG',
    'file:///F:/2026/03/14/myf/DSC_1434.JPG',
    'file:///F:/2026/03/14/myf/DSC_1435.JPG',
    'file:///F:/2026/03/14/myf/DSC_1436.JPG',
    'file:///F:/2026/03/14/myf/DSC_1437.JPG',
    'file:///F:/2026/03/14/myf/DSC_1438.JPG',
    'file:///F:/2026/03/14/myf/DSC_1439.JPG',
    'file:///F:/2026/03/14/myf/DSC_1440.JPG',
    'file:///F:/2026/03/14/myf/DSC_1441.JPG',
    'file:///F:/2026/03/14/myf/DSC_1442.JPG',
    'file:///F:/2026/03/14/myf/DSC_1443.JPG',
    'file:///F:/2026/03/14/myf/DSC_1444.JPG',
    'file:///F:/2026/03/14/myf/DSC_1445.JPG',
    'file:///F:/2026/03/14/myf/DSC_1446.JPG',
    'file:///F:/2026/03/14/myf/DSC_1447.JPG',
    'file:///F:/2026/03/14/myf/DSC_1448.JPG',
    'file:///F:/2026/03/14/myf/DSC_1449.JPG',
    'file:///F:/2026/03/14/myf/DSC_1450.JPG',
    'file:///F:/2026/03/14/myf/DSC_1451.JPG',
    'file:///F:/2026/03/14/myf/DSC_1452.JPG',
    'file:///F:/2026/03/14/myf/DSC_1453.JPG',
    'file:///F:/2026/03/14/myf/DSC_1454.JPG',
    'file:///F:/2026/03/14/myf/DSC_1455.JPG',
    'file:///F:/2026/03/14/myf/DSC_1456.JPG',
    'file:///F:/2026/03/14/myf/DSC_1457.JPG',
    'file:///F:/2026/03/14/myf/DSC_1458.JPG',
    'file:///F:/2026/03/14/myf/DSC_1459.JPG',
    'file:///F:/2026/03/14/myf/DSC_1460.JPG',
    'file:///F:/2026/03/14/myf/DSC_1461.JPG',
    'file:///F:/2026/03/14/myf/DSC_1462.JPG',
    'file:///F:/2026/03/14/myf/DSC_1463.JPG',
    'file:///F:/2026/03/14/myf/DSC_1464.JPG',
    'file:///F:/2026/03/14/myf/DSC_1465.JPG',
    'file:///F:/2026/03/14/myf/DSC_1466.JPG',
    'file:///F:/2026/03/14/myf/DSC_1467.JPG',
    'file:///F:/2026/03/14/myf/DSC_1468.JPG',
    'file:///F:/2026/03/14/myf/DSC_1469.JPG',
    'file:///F:/2026/03/14/myf/DSC_1470.JPG',
    'file:///F:/2026/03/14/myf/DSC_1471.JPG',
    'file:///F:/2026/03/14/myf/DSC_1472.JPG',
    'file:///F:/2026/03/14/myf/DSC_1473.JPG',
    'file:///F:/2026/03/14/myf/DSC_1474.JPG',
    'file:///F:/2026/03/14/myf/DSC_1475.JPG',
    'file:///F:/2026/03/14/myf/DSC_1476.JPG',
    'file:///F:/2026/03/14/myf/DSC_1477.JPG',
    'file:///F:/2026/03/14/myf/DSC_1478.JPG',
    'file:///F:/2026/03/14/myf/DSC_1479.JPG',
    'file:///F:/2026/03/14/myf/DSC_1480.JPG',
    'file:///F:/2026/03/14/myf/DSC_1481.JPG',
    'file:///F:/2026/03/14/myf/DSC_1482.JPG',
    'file:///F:/2026/03/14/myf/DSC_1483.JPG',
    'file:///F:/2026/03/14/myf/DSC_1484.JPG',
    'file:///F:/2026/03/14/myf/DSC_1485.JPG',
    'file:///F:/2026/03/14/myf/DSC_1486.JPG',
    'file:///F:/2026/03/14/myf/DSC_1487.JPG',
    'file:///F:/2026/03/14/myf/DSC_1488.JPG',
    'file:///F:/2026/03/14/myf/DSC_1489.JPG',
    'file:///F:/2026/03/14/myf/DSC_1490.JPG',
    'file:///F:/2026/03/14/myf/DSC_1491.JPG',
    'file:///F:/2026/03/14/myf/DSC_1492.JPG',
    'file:///F:/2026/03/14/myf/DSC_1493.JPG',
    'file:///F:/2026/03/14/myf/DSC_1494.JPG',
    'file:///F:/2026/03/14/myf/DSC_1495.JPG',
    'file:///F:/2026/03/14/myf/DSC_1496.JPG',
    'file:///F:/2026/03/14/myf/DSC_1497.JPG',
    'file:///F:/2026/03/14/myf/DSC_1498.JPG',
    'file:///F:/2026/03/14/myf/DSC_1499.JPG',
    'file:///F:/2026/03/14/myf/DSC_1500.JPG',
    'file:///F:/2026/03/14/myf/DSC_1501.JPG',
    'file:///F:/2026/03/14/myf/DSC_1502.JPG',
    'file:///F:/2026/03/14/myf/DSC_1503.JPG',
    'file:///F:/2026/03/14/myf/DSC_1504.JPG',
    'file:///F:/2026/03/14/myf/DSC_1505.JPG',
    'file:///F:/2026/03/14/myf/DSC_1506.JPG',
    'file:///F:/2026/03/14/myf/DSC_1507.JPG',
    'file:///F:/2026/03/14/myf/DSC_1508.JPG',
    'file:///F:/2026/03/14/myf/DSC_1509.JPG',
    'file:///F:/2026/03/14/myf/DSC_1510.JPG',
    'file:///F:/2026/03/14/myf/DSC_1511.JPG',
    'file:///F:/2026/03/14/myf/DSC_1512.JPG',
    'file:///F:/2026/03/14/myf/DSC_1513.JPG',
    'file:///F:/2026/03/14/myf/DSC_1514.JPG',
    'file:///F:/2026/03/14/myf/DSC_1515.JPG',
    'file:///F:/2026/03/14/myf/DSC_1516.JPG',
    'file:///F:/2026/03/14/myf/DSC_1517.JPG',
    'file:///F:/2026/03/14/myf/DSC_1518.JPG',
    'file:///F:/2026/03/14/myf/DSC_1519.JPG',
    'file:///F:/2026/03/14/myf/DSC_1520.JPG',
    'file:///F:/2026/03/14/myf/DSC_1521.JPG',
    'file:///F:/2026/03/14/myf/DSC_1522.JPG',
    'file:///F:/2026/03/14/myf/DSC_1523.JPG',
    'file:///F:/2026/03/14/myf/DSC_1527.JPG',
    'file:///F:/2026/03/14/myf/DSC_1528.JPG',
    'file:///F:/2026/03/14/myf/DSC_1529.JPG',
    'file:///F:/2026/03/14/myf/DSC_1530.JPG',
    'file:///F:/2026/03/14/myf/DSC_1531.JPG',
    'file:///F:/2026/03/14/myf/DSC_1532.JPG',
    'file:///F:/2026/03/14/myf/DSC_1533.JPG',
    'file:///F:/2026/03/14/myf/DSC_1534.JPG',
    'file:///F:/2026/03/14/myf/DSC_1535.JPG',
    'file:///F:/2026/03/14/myf/DSC_1536.JPG',
    'file:///F:/2026/03/14/myf/DSC_1537.JPG',
    'file:///F:/2026/03/14/myf/DSC_1538.JPG',
    'file:///F:/2026/03/14/myf/DSC_1539.JPG',
    'file:///F:/2026/03/14/myf/DSC_1540.JPG',
    'file:///F:/2026/03/14/myf/DSC_1541.JPG',
    'file:///F:/2026/03/14/myf/DSC_1542.JPG',
    'file:///F:/2026/03/14/myf/DSC_1543.JPG',
    'file:///F:/2026/03/14/myf/DSC_1544.JPG',
    'file:///F:/2026/03/14/myf/DSC_1545.JPG',
    'file:///F:/2026/03/14/myf/DSC_1546.JPG',
    'file:///F:/2026/03/14/myf/DSC_1547.JPG',
    'file:///F:/2026/03/14/myf/DSC_1548.JPG',
    'file:///F:/2026/03/14/myf/DSC_1549.JPG',
    'file:///F:/2026/03/14/myf/DSC_1550.JPG',
    'file:///F:/2026/03/14/myf/DSC_1551.JPG',
    'file:///F:/2026/03/14/myf/DSC_1552.JPG',
    'file:///F:/2026/03/14/myf/DSC_1553.JPG',
    'file:///F:/2026/03/14/myf/DSC_1554.JPG',
    'file:///F:/2026/03/14/myf/DSC_1555.JPG',
    'file:///F:/2026/03/14/myf/DSC_1556.JPG',
    'file:///F:/2026/03/14/myf/DSC_1557.JPG',
    'file:///F:/2026/03/14/myf/DSC_1558.JPG',
    'file:///F:/2026/03/14/myf/DSC_1559.JPG',
    'file:///F:/2026/03/14/myf/DSC_1560.JPG',
    'file:///F:/2026/03/14/myf/DSC_1561.JPG',
    'file:///F:/2026/03/14/myf/DSC_1562.JPG',
    'file:///F:/2026/03/14/myf/DSC_1563.JPG',
    'file:///F:/2026/03/14/myf/DSC_1564.JPG',
    'file:///F:/2026/03/14/myf/DSC_1565.JPG',
    'file:///F:/2026/03/14/myf/DSC_1566.JPG',
    'file:///F:/2026/03/14/myf/DSC_1567.JPG',
    'file:///F:/2026/03/14/myf/DSC_1568.JPG',
    'file:///F:/2026/03/14/myf/DSC_1569.JPG',
    'file:///F:/2026/03/14/myf/DSC_1570.JPG',
    'file:///F:/2026/03/14/myf/DSC_1571.JPG',
    'file:///F:/2026/03/14/myf/DSC_1572.JPG',
    'file:///F:/2026/03/14/myf/DSC_1573.JPG',
    'file:///F:/2026/03/14/myf/DSC_1574.JPG',
    'file:///F:/2026/03/14/myf/DSC_1575.JPG',
    'file:///F:/2026/03/14/myf/DSC_1576.JPG',
    'file:///F:/2026/03/14/myf/DSC_1578.JPG',
    'file:///F:/2026/03/14/myf/DSC_1579.JPG',
    'file:///F:/2026/03/14/myf/DSC_1580.JPG',
    'file:///F:/2026/03/14/myf/DSC_1581.JPG',
    'file:///F:/2026/03/14/myf/DSC_1582.JPG',
    'file:///F:/2026/03/14/myf/DSC_1583.JPG',
    'file:///F:/2026/03/14/myf/DSC_1584.JPG',
    'file:///F:/2026/03/14/myf/DSC_1585.JPG',
    'file:///F:/2026/03/14/myf/DSC_1586.JPG',
    'file:///F:/2026/03/14/myf/DSC_1587.JPG',
    'file:///F:/2026/03/14/myf/DSC_1588.JPG',
];

// LIMITS FOR IVONNE'S XV AÑOS
const LIMITS = {
    impresion: 145
};

// Preselections from client review (2026-03-24)
const PRESELECCIONES_IVONNE = {"2":{"impresion":true},"3":{"impresion":true},"17":{"impresion":true},"20":{"impresion":true},"30":{"impresion":true},"36":{"impresion":true},"40":{"impresion":true},"41":{"impresion":true},"43":{"impresion":true},"46":{"impresion":true},"47":{"impresion":true},"52":{"impresion":true},"57":{"impresion":true},"60":{"impresion":true},"64":{"impresion":true},"69":{"impresion":true},"74":{"impresion":true},"84":{"impresion":true},"85":{"impresion":true},"90":{"impresion":true},"106":{"impresion":true},"111":{"impresion":true},"114":{"impresion":true},"119":{"impresion":true},"125":{"impresion":true},"129":{"impresion":true},"133":{"impresion":true},"138":{"impresion":true},"142":{"impresion":true},"146":{"impresion":true},"152":{"impresion":true},"157":{"impresion":true},"159":{"impresion":true},"161":{"impresion":true},"170":{"impresion":true},"174":{"impresion":true},"176":{"impresion":true},"178":{"impresion":true},"183":{"impresion":true},"187":{"impresion":true},"189":{"impresion":true},"195":{"impresion":true},"199":{"impresion":true},"207":{"impresion":true},"211":{"impresion":true},"215":{"impresion":true},"216":{"impresion":true},"228":{"impresion":true},"229":{"impresion":true},"230":{"impresion":true},"235":{"impresion":true},"236":{"impresion":true},"239":{"impresion":true},"240":{"impresion":true},"242":{"impresion":true},"244":{"impresion":true},"247":{"impresion":true},"253":{"impresion":true},"255":{"impresion":true},"264":{"impresion":true},"266":{"impresion":true},"273":{"impresion":true},"276":{"impresion":true},"278":{"impresion":true},"283":{"impresion":true},"285":{"impresion":true},"289":{"impresion":true},"291":{"impresion":true},"293":{"impresion":true},"294":{"impresion":true},"299":{"impresion":true},"302":{"impresion":true},"306":{"impresion":true},"313":{"impresion":true},"316":{"impresion":true},"317":{"impresion":true},"320":{"impresion":true},"325":{"impresion":true},"328":{"impresion":true},"330":{"impresion":true},"334":{"impresion":true},"335":{"impresion":true},"338":{"impresion":true},"341":{"impresion":true},"343":{"impresion":true},"348":{"impresion":true},"354":{"impresion":true},"355":{"impresion":true},"356":{"impresion":true},"361":{"impresion":true},"364":{"impresion":true},"366":{"impresion":true},"370":{"impresion":true},"372":{"impresion":true},"380":{"impresion":true},"383":{"impresion":true},"385":{"impresion":true},"388":{"impresion":true},"389":{"impresion":true},"390":{"impresion":true},"397":{"impresion":true},"404":{"impresion":true},"415":{"impresion":true},"419":{"impresion":true},"427":{"impresion":true},"432":{"impresion":true},"433":{"impresion":true},"435":{"impresion":true},"453":{"impresion":true},"455":{"impresion":true},"457":{"impresion":true},"458":{"impresion":true},"464":{"impresion":true},"466":{"impresion":true},"468":{"impresion":true},"471":{"impresion":true},"476":{"impresion":true},"477":{"impresion":true},"484":{"impresion":true},"489":{"impresion":true},"499":{"impresion":true},"504":{"impresion":true},"510":{"impresion":true},"515":{"impresion":true},"528":{"impresion":true},"531":{"impresion":true},"537":{"impresion":true},"540":{"impresion":true},"543":{"impresion":true},"544":{"impresion":true},"547":{"impresion":true},"557":{"impresion":true},"560":{"impresion":true},"568":{"impresion":true},"580":{"impresion":true},"588":{"impresion":true},"589":{"impresion":true},"593":{"impresion":true},"598":{"impresion":true},"604":{"impresion":true},"607":{"impresion":true},"617":{"impresion":true},"628":{"impresion":true},"630":{"impresion":true},"631":{"impresion":true}};

let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'impresion'; // Default: show selected for printing


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
