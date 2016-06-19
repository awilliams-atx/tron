var CycleUtil = {
  illegalDirs: function (dir) {
    if (Math.abs(dir[0]) === 1) {
      return ['1,0', '-1,0'];
    } else {
      return ['0,1', '0,-1'];
    }
  },
  isCollision: function (pos1, pos2) {
    if (pos1[0] === pos2[0] && pos1[1] === pos2[1]) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = CycleUtil;