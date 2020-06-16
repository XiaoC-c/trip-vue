<template>
	<div class="login">
		<div class="header0">
			<ul class="nav">
				<li>
					<router-link to="/"><a>首页</a></router-link>
				</li>
				<li>
					<router-link to="/map"><a>非遗地图</a></router-link>
				</li>
				<li>
					<router-link to="/feature"><a>特色景区</a></router-link>
					<div class="navtwo">
						<router-link to="/feature"><a>衡水内画</a></router-link>
						<router-link to="/feature"><a>武强年画</a></router-link>
						<router-link to="/feature"><a>刻铜艺术等</a></router-link>
					</div>
				</li>
				<li>
					<router-link to="/strategy"><a>旅行攻略</a></router-link>
				</li>
				<li>
					<router-link to="/list"><a>保护名录</a></router-link>
				</li>
				<li>
					<router-link to="/news"><a>新闻动态</a></router-link>
				</li>
				<li>
					<router-link to="/login"><a>游客动态</a></router-link>
				</li>
				<li>
					<router-link to="/lianxi"><a>联系我们</a></router-link>
				</li>
			</ul>
		</div>
		<div class="clear"></div>
		<div class="banner0">
			
		</div>
		<div class="clear"></div>
		<div class="brandnav">
			<div class="con">位置：首页 > 游客动态</div>
		</div>
		<div class="clear"></div>
		<div class="part1">
			<div class="main">
				<div class="info-box">
					<div class="info-header">
						<div class="logo">
							游客动态
						</div>
						<div class="login-info">
							登录名：<span>{{user.username}}</span>
							<a href="" class="logout-button" @click.prevent="logout()">退出</a>
						</div>
					</div>
					<div class="note-box">
						<div class="note-form">
						</div>
						<div class="note-list">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<thead>
									<tr>
										<th width="10%">编号</th>
										<th width="65%">留言内容</th>
										<th width="25%">日期</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="note,index in noteLists">
										<td align="center">{{index + 1}}</td>
										<td>{{note.title}}</td>
										<td align="center">{{note.date}}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="main">
				<div class="foot">
					<div class="fnav">
						<router-link to="/index"><a>首页</a></router-link>
						<router-link to="/map"><a>非遗地图</a></router-link>
						<router-link to="/feature"><a>特色景区</a></router-link>
						<router-link to="/strategy"><a>旅行攻略</a></router-link>
						<router-link to="/list"><a>保护名录</a></router-link>
						<router-link to="/news"><a>新闻动态</a></router-link>
						<router-link to="/login"><a>游客动态</a></router-link>
						<router-link to="/lianxi"><a>联系我们</a></router-link>
					</div>
					<div class="clear"></div>
					<div class="fot">
						<div>电话：0311-1111111<br />邮箱：123.45@360.com<br />手机：135 456 7890<br />地址：河北省衡水市和平西路1088号 </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					username: window.localStorage.getItem('username'),
					user_id: window.localStorage.getItem('user_id')
				},
				noteLists:[
					{
						id:1,
						title:"衡水内画好漂亮啊",
						date:"2020-6-16"
					},
					{
						id:2,
						title:"武强年画 好--漂亮哦",
						date:"2020-6-16"
					},
					{
						id:3,
						title:"铜刻艺术好漂==亮呀",
						date:"2020-6-16"
					},
					{
						id:4,
						title:"鼻烟壶好漂亮--诶",
						date:"2020-6-16"
					},
					{
						id:4,
						title:"好漂亮--诶",
						date:"2020-6-16"
					},
					{
						id:4,
						title:"好漂亮--诶",
						date:"2020-6-16"
					},
					{
						id:4,
						title:"好漂亮--诶",
						date:"2020-6-16"
					},
					{
						id:4,
						title:"好漂亮--诶",
						date:"2020-6-16"
					},
				]
			}
		},
		mounted() {
			
		},
		methods: {
			logout() {
				this.$store.dispatch('logout')
				this.$router.push('/login')
			}
		}
	}
</script>

<style scoped="task">
	.info-box{
		height: 550px;
	}
	.info-header {
		padding: 20px 0px;
		font-size: 16px;
	}

	.logo {
		font-size: 28px;
		font-weight: bold;
		color: #81A849;
	}

	.login-info {
		text-align: right ;
	}

	.login-info span {
		color: #cc0000;
	}

	.logout-button {
		margin-left: 20px;
		color: #0000aa;
		text-decoration: none;
	}

	.note-form input {
		padding: 5px 10px;
		width: 200px;
	}

	.note-button {
		border-radius: 20px;
		background-color: #81A849;
		border: none;
		color: #fff;
		padding: 5px 10px;
		margin-left: 10px;
	}

	.note-list {
		margin-top: 20px;
	}

	/* table td, table th{border: 0;} */
	table thead th {
		background-color: #efefef;
		line-height: 40px;
		border-bottom: 1px solid #cccccc;
	}

	table tbody td {
		line-height: 40px;
		border-bottom: 1px solid #cccccc;
	}

	.operation-button {
		color: #0000aa;
		text-decoration: none;
	}

	.complete {
		color: #aaaaaa;
		text-decoration: line-through;
	}
</style>
