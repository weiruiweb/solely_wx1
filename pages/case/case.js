import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();
import {Token} from '../../utils/token.js';
const token = new Token();

Page({
  data: {
    is_show:false,
    is_current:0,
  },
  //事件处理函数
  preventTouchMove:function(e) {

  },
  menu(e){
     this.setData({
        is_show:true
      })
  },
  this_choose(e){
    this.setData({
      currentId:e.currentTarget.dataset.id,
      is_show:false,
    })
  },
  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },

  intoPathRedi(e){
    const self = this;
    wx.navigateBack({
      delta:1
    })
  },

  intoPathRedirect(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'redi');
  }, 
})

  