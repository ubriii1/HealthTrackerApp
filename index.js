// 导入所需的模块
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 设置中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 路由处理程序
app.get('/', (req, res) => {
  res.send('Welcome to our health tracking app!');
});

app.post('/logActivity', (req, res) => {
  // 处理记录活动的请求
  const { activity, duration } = req.body;
  // 将活动和持续时间记录到用户的健康日志中
  // 可以将日志保存到数据库或其他数据源中
  res.json({ message: 'Activity logged successfully!' });
});

app.post('/setExerciseTarget', (req, res) => {
  // 处理设置运动目标的请求
  const { target } = req.body;
  // 将目标保存到用户的健康配置中
  // 可以将配置保存到数据库或其他数据源中
  res.json({ message: 'Exercise target set successfully!' });
});

app.get('/getRecommendations', (req, res) => {
  // 处理获取个性化建议的请求
  // 根据用户的健康日志和配置生成个性化建议
  const recommendations = [
    'Increase your daily step count',
    'Try a new workout routine',
    'Eat more fruits and vegetables'
  ];
  res.json(recommendations);
});

// 启动服务器
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
