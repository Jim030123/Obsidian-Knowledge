const folder = "CS/";     // 📁 设置笔记放入的子文件夹（确保已存在）
const prefix = "CS";      // 🏷️ 设置文件名前缀

const title = await quickAddApi.inputPrompt("请输入笔记标题"); // ✍️ 让你输入笔记标题

// 获取该文件夹下所有 .md 文件
const files = app.vault.getFiles().filter(f => f.path.startsWith(folder) && f.path.endsWith(".md"));

// 提取编号（如：CS-001. xxx）
const numbers = files
  .map(f => f.name.match(/^CS-(\d+)\./))
  .filter(Boolean)
  .map(match => parseInt(match[1]));

// 生成新编号
const next = Math.max(0, ...numbers) + 1;
const num = String(next).padStart(3, "0");

// 拼接文件名 & 内容
const filename = `${prefix}-${num}. ${title}`;
const fullPath = `${folder}${filename}.md`;
const content = `# ${title}`;

// 创建笔记
await app.vault.create(fullPath, content);

// 成功提示
new Notice(`✅ 已创建：${filename}`);
