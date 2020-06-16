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
			<div class="con">位置：首页 > 用户登陆</div>
		</div>
		<div class="clear"></div>
		<div class="part1">
			<div class="main">
				<div class="zz">
					<div class="login1">
						<div class="login-title">用户登录</div>
						<div class="input-item">
							<input type="text" placeholder="请输入用户名" v-model="user.username">
						</div>
						<div class="input-item">
							<input type="password" placeholder="请输入密码" v-model="user.password">
						</div>
						<div class="button-item">
							<button @click="login()">立即登录</button>
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
		name: "login",
		data() {
			return {
				user: {
					username: "",
					password: ""
				}
			}
		},
		methods: {
			login() {
				var params = {
					username: this.user.username,
					password: this.user.password,
				};
				this.$http.post(this.$host + '/user/login', params)
					.then(response => {
						var result = response.data
						console.log(result)
						if (result.stauts == 200) {
							this.$store.dispatch('login', {
								username: result.data.realname,
								user_id: result.data.id
							})
							this.$router.push('/task')
						} else {
							alert(result.message)
						}
					})
					.catch(error => {
						console.log(error)
					})
	
			}
		}
	}
</script>

<style scoped="login">
	
	.error-info {
		color: red;
		padding: 20px 0px 0px;
	}
	
	.login1 {
		height: 300px;
		margin: auto;
	}
	
	.login-title {
		margin-top: 20px;
		text-align: center;
		color: #81A849;
		font-size: 24px;
		font-weight: bold;
		line-height: 48px;
	}
	
	.input-item {
		margin-top: 20px;
	}
	
	.input-item input {
		padding: 10px 20px;
		width: 358px;
	}
	
	.button-item {
		text-align: center;
		margin-top: 20px;
	}
	
	.button-item button {
		width: 400px;
		border: none;
		background-color: #81A849;
		color: #FFFFFF;
		font-size: 20px;
		font-weight: bold;
		padding: 8px 0;
		border-radius: 10px;
	}
</style>
