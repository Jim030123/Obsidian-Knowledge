<%*
const folder = "Knowledge Unit/Computer Science (CS)/"; // 当前科目文件夹
const prefix = "CS";

// 获取该文件夹下的文件
const files = app.vault.getFiles().filter(f => f.path.startsWith(folder));

// 找出所有编号
const numbers = files.map(f => parseInt(f.name.match(/\d+/)?.[0] || 0));
const next = Math.max(...numbers, 0) + 1;
const num = String(next).padStart(3, "0");

const title = await tp.system.prompt("请输入笔记标题");
const filename = `${prefix}-${num}. ${title}`;

// 自动设置文件名
tp.file.rename(filename);

// 输出笔记标题
%># <%= title %>

