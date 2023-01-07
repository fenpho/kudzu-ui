// 该模块在window下运行会有问题，windows系统建议使用git base运行build:doc命令
import { spawn } from 'child_process'; 

const copy = (src, dist) => {
  spawn('cp', ['-r', , src, dist])
};

copy('./packages', './docs')
