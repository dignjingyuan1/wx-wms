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
        call.getData('/api/wms/wmsOutPlan/detail',param,(data)=>{
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
        console.log(this.data.contactName)
        if(!this.data.trainBatchNumber){
            wx.showModal({
                title:"提示",
                content:"请填写车牌号！",
                showCancel:false
            })
            return;
        }
        if(!this.data.contactName){
            wx.showModal({
                title:"提示",
                content:"请填写司机姓名！",
                showCancel:false
            })
            return;
        }
        if(!this.data.contactTel){
            wx.showModal({
                title:"提示",
                content:"请填写司机电话！",
                showCancel:false
            })
            return;
        }
        this.data.plan.trainBatchNumber = this.data.trainBatchNumber
        this.data.plan.contactName = this.data.contactName
        this.data.plan.contactTel = this.data.contactTel
        call.request('/api/wms/wmsOutPlan/save',this.data.plan,(data)=>{
            console.log('登记完成！')
            wx.showToast({
              title: '入库登记完成',
            })
        },(er)=>{
            console.log('加载数据：', er)
        })
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