<template>
	<div class="feature">
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
			<img src="../assets/images/banner.png" />
		</div>
		<div class="clear"></div>
		<div class="brandnav">
			<div class="con">位置：首页 > 特色非遗</div>
		</div>
		<div class="clear"></div>
		<div class="contitbox">
			<p>
				<router-link to="/piclist" class="ccsl"><a>特色非遗</a></router-link>
			</p>
			<span class="ccsl">THE IMMATERIALITY</span>
		</div>
		<div class="clear"></div>
		<ul class="piclistul">
			<li>
				<div class="kug"></div>
				<div class="proimg">
					<router-link to="/picdetail"><a><img src="../assets/images/hengshui.jpg" /></a></router-link>

				</div>
				<router-link to="/picdetail"><a>
						<p class="ccsl">衡水内画</p>
					</a></router-link>
			</li>
			<li>
				<div class="kug"></div>
				<div class="proimg">
					<router-link to="/picdetail"><a><img src="../assets/images/wuqiang.jpg" /></a></router-link>
				</div>
				<router-link to="/picdetail"><a>
						<p class="ccsl">武强年画</p>
					</a></router-link>
			</li>
			<li>
				<div class="kug"></div>
				<div class="proimg">
					<router-link to="/picdetail"><a><img src="../assets/images/ketong.jpg" /></a></router-link>

				</div>
				<router-link to="/picdetail"><a>
						<p class="ccsl">刻铜艺术</p>
					</a></router-link>
			</li>
			<li>
				<div class="kug"></div>
				<div class="proimg">
					<router-link to="/picdetail"><a><img src="../assets/images/falang.jpg" /></a></router-link>

				</div>
				<router-link to="/picdetail"><a>
						<p class="ccsl">铜胎画珐琅</p>
					</a></router-link>

			</li>
			<li>
				<div class="kug"></div>
				<div class="proimg">
					<router-link to="/picdetail"><a><img src="../assets/images/ketongyishu.jpg" /></a></router-link>

				</div>
				<router-link to="/picdetail"><a>
						<p class="ccsl">刻铜艺术</p>
					</a></router-link>
			</li>
			<li>
				<div class="kug"></div>
				<div class="proimg">
					<router-link to="/picdetail"><a><img src="../assets/images/longfeng.jpg" /></a></router-link>

				</div>
				<router-link to="/picdetail"><a>
						<p class="ccsl">龙凤贡面</p>
					</a></router-link>

			</li>
		</ul>
		<div class="clear"></div>

		<div class="clear"></div>
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
</script>

<style>
</style>
