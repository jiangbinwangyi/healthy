<template>
	<div>
		<Table border :columns="columns1" :data="forecast"></Table>
		<Page :total="total" :page-size="5" size="small" @on-change="paging" show-total prev-text="上一页" next-text="下一页" />
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'zhipin',
		data() {
			return {
				columns1: [{
						title: '姓名',
						key: '姓名',
					},
					{
						title: '性别',
						key: '性别',
						width: 50
					},
					{
						title: '年龄',
						key: '年龄',
						width: 50
					},
					{
						title: '区县',
						key: '区县',
						width: 50
					},
					{
						title: '疾病预测',
						key: '疾病预测'
					},
					{
						title: '风险概率',
						key: '风险概率'
					},
					{
						title: '家庭年收入',
						key: '家庭年收入'
					},
					{
						title: '年均医疗费用',
						key: '年均医疗费用'
					},
					{
						title: '详情',
						key: 'action',
						align: 'center',
						render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.row.id)
                                        }
                                    }
                                }, '查看'),
                            ]);
                        }
					}
				],
				forecast: [],
				total: 0,
				data: ""
			}
		},
		mounted() {
			axios.get('./static/application.json').then(response => {
				this.$nextTick(() => {
					this.data = response.data.forecast;
					this.total = this.data.length;
					this.paging(1);
				})
			})
		},
		created() {},
		updated() {},
		methods: {
			paging: function(page){
				let num = 5;
				this.forecast = [];//先清空
				let maxNum = 0;
				if(num+num*(page-1)>this.total){
					maxNum = this.total;
				}else{
					maxNum = num+num*(page-1);
				}
				for(let i=num*(page-1);i<maxNum;i++){
					let newObj = this.data[i].info;
					newObj.id = this.data[i].id;
					this.forecast.push(newObj);
				}
			},
			show: function(id){
				this.$emit('userInfo',id)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	
</style>