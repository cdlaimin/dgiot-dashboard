/**
 * @description 由于dgiot开源平台和项目地址代理api不一致，可以将项目配置文件放在以下。代理链接后面不要写/
 */
module.exports = {
  proxy: [
    /**
     * @description iotapi 联调接口。开发使用
     */
    {
      path: 'iotapi',
      target: 'https://pump.dgiotcloud.com',
    },
    /**
     * @description 静态资源目录。开发使用
     */
    {
      path: 'dgiot_dashboard',
      target: 'https://pump.dgiotcloud.com',
    },
    /**
     * @description amis server 开发使用
     */
    {
      path: 'baidubce',
      target: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock',
    },
  ],
}
