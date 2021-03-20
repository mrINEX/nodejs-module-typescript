var _a;
var osPrefix = 'os_';
var support = (_a = {},
    _a[osPrefix + 'Windows'] = isSupported('Windows'),
    _a[osPrefix + 'iOS'] = isSupported('iOS'),
    _a[osPrefix + 'Android'] = isSupported('Android'),
    _a);
function isSupported(os) {
    return Math.random() >= 0.5;
}
