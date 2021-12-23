// pages/wms/inPlan/inPlanList.js
var call = require("../../../utils/request.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        param:{
            pageNo:1,
            pageSize:5,
            planInNo:'',
            isLastPage: false
        },
        planInNo: '',
        planList:[]
    },

    inPlanEidit: function(event) {
        console.log(event)
        wx.navigateTo({
            url: 'edit/inPlanEidit?planNo='+event.currentTarget.dataset['planno']
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('this.data.param:', this.data.planInNo)
        this.data.param.pageNo = 1
        this.data.param.planInNo = this.data.planInNo;
        call.getData('/api/wms/wmsInPlan/list',this.data.param,(data)=>{
            console.log('加载数据：', data.list)
            if(!data||!data.list){
                this.setData({
                    planList: []
                })
                return;
            }
            if(data.list.length < this.data.param.pageSize){
                this.data.param.isLastPage = true;
            }
            this.setData({
                planList: data.list
            })
        },(er)=>{
            console.log('加载数据：', er)
        })
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
        if(this.data.param.isLastPage){
            return;
        }
        this.data.param.pageNo++;
        call.getData('/api/wms/wmsInPlan/list',this.data.param,(data)=>{
            console.log('翻页数据：', data.list)
            if(data.list.length < this.data.param.pageSize){
                this.data.param.isLastPage = true;
            }
            this.data.planList  = this.data.planList.concat(data.list)
            this.setData({
                planList: this.data.planList
            })
        },(er)=>{
            console.log('加载数据：', er)
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})