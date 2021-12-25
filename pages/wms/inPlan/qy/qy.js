// pages/wms/inPlan/edit/inPlanEidit.js
var call = require("../../../../utils/request.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        plan:{},
        trainBatchNumber: '',
        contactName:'',
        contactTel:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let param = {
            // planNo:options.planNo
            planNo:'IN20211125210456073'
        }
        call.getData('/api/wms/wmsInPlan/detail',param,(data)=>{
            console.log('计划数据加载：', data)
            this.setData({
                plan: data,
                trainBatchNumber: data.trainBatchNumber,
                contactName: data.contactName,
                contactTel: data.contactTel
            })
        },(er)=>{
            console.log('加载数据：', er)
        })
    },
    save: function(){
        // TODO 调用迁样接口 生成质检单
    },
    goBack: function(){
        wx.navigateBack(1)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})