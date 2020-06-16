<template>
	<div class="index">
		<div class="header">
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
		<div class="banner">
			<div class="b-img">
				<img src="../assets/images/banner1.jpg" width="100%" />
			</div>
			<div class="clear"></div>
			<div class="b-list"> </div>
		</div>
		<div class="clear"></div>
		<div class="part1">
			<div class="main">
				<div class="contitbox">
					<p>
						<router-link to="/map" class="ccsl"><a>非物质文化遗产旅游地图</a></router-link>
					</p>
					<span class="ccsl">THE MAP</span>
				</div>
				<div><img src="../assets/images/map.jpg" /> </div>
				<div class="morebox">
					<span class="img"></span>
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<div class="part2">
			<div class="contitbox">
				<p>
					<router-link to="/feature" class="ccsl"><a>特色景区</a></router-link>
				</p>
				<span class="ccsl">THE FEATURE</span>
			</div>
			<ul>
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
			</ul>
		</div>
		<div class="clear"></div>
		<div class="part3">
			<div class="contitbox">
				<p>
					<router-link to="/feature" class="ccsl"><a>旅行攻略</a></router-link>
				</p>

				<span class="ccsl">THE STRATEGY</span>
			</div>
			<div class="p3con">
				<div class="p3conL">
					<div class="subBox0">
						<ul style="margin-left: 0px; overflow: hidden">
							<li>
								<router-link to="/picdetail"><a><img src="../assets/images/2.png" /></a></router-link>
							</li>
							<li>
								<router-link to="/picdetail"><a><img src="../assets/images/2.png" /></a></router-link>
							</li>
							<li>
								<router-link to="/picdetail"><a><img src="../assets/images/2.png" /></a></router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="p3conR">
					<img src="../assets/images/3.png" />
					<div class="tit ccsl">客 | 房 | 介 | 绍</div>
					<div class="sub">桃花林苑中有各式客房100套,房型分为中式、现代两个类型,以满足客人的不同需求…</div>
					<div class="updowm">
						<p class="up">上一个</p>
						<p class="down">下一个</p>
					</div>
				</div>
			</div>
			<div class="morebox">
				<span class="img"></span>
			</div>
		</div>
		<div class="clear"></div>
		<div class="part4">
			<div class="main">
				<div class="contitbox">
					<p>
						<router-link to="/list" class="ccsl"><a>保护名录</a></router-link>
					</p>

					<span class="ccsl">THE LIST</span>
				</div>
				<ul>
					<li>
						<div class="newl">
							<router-link to="/detail" class="ccsl"><a>2019“中国非遗十大年度事件”发布</a></router-link>

							<div class="sub">12月29日，2019“中国非遗年度人物”揭晓仪式在京举办。活动现场，光明日报和中国文化报联合发布2019“中国非遗十大年度事件”，习近平总书记考察非物质文化遗产并作出重要指示、《国家级非物质文化遗产代表性传承人认定与管理办法》制定颁布、文化和旅游部发布《曲艺传承发展计划》等被评为2019“中国非遗十大年度事件”。</div>
						</div>
						<div class="newr">
							<span>12.30</span>
							<time>2019</time>
						</div>
						<div class="clear"></div>
					</li>
					<li>
						<div class="newl">
							<router-link to="/detail" class="ccsl"><a>全国各地广泛开展“非遗过大年 文化进万家”系列文化活动</a></router-link>

							<div class="sub">按照中央宣传部关于在全国范围广泛开展“我们的中国梦”——文化进万家活动的统一部署，文化和旅游部要求各地在2020年春节、元宵节期间，以国家级贫困县为重点，组织非遗小分队奔赴县级及县以下村镇社区、学校等，广泛开展“非遗过大年
								文化进万家”系列文化活动。</div>
						</div>
						<div class="newr">
							<span>01.24</span>
							<time>2020</time>
						</div>
						<div class="clear"></div>
					</li>
					<li>
						<div class="newl">
							<router-link to="/detail" class="ccsl"><a>抗击疫情，非遗传承人不缺席</a></router-link>

							<div class="sub">这个春节，新型冠状病毒感染的肺炎疫情牵动着每个人的心。为打好疫情防控的这场“硬仗”，全国各地文化和旅游市场主体和公共文化服务机构采取了闭馆或暂停服务等措施；春节期间的社火、庙会、文艺汇演、营业性演出等各类群众聚集型文化娱乐活动也均采取取消或延期举办。</div>
						</div>
						<div class="newr">
							<span>02.01</span>
							<time>2020</time>
						</div>
						<div class="clear"></div>
					</li>
					<li>
						<div class="newl">
							<router-link to="/detail" class="ccsl"><a>今年“文化和自然遗产日”非遗宣传聚焦“健康生活”</a></router-link>

							<div class="sub">日前，文化和旅游部办公厅印发《关于开展2020年“文化和自然遗产日”非遗宣传展示活动的通知》。通知明确，为进一步提高人民群众非遗保护意识，传承、弘扬中华优秀传统文化，营造非遗保护良好社会氛围，文化和旅游部决定在2020年6月13日“文化和自然遗产日”前后集中开展非遗宣传展示活动。</div>
						</div>
						<div class="newr">
							<span>04.27</span>
							<time>2020</time>
						</div>
						<div class="clear"></div>
					</li>
				</ul>
				<div class="more2">
					<a>MORE</a>
				</div>
			</div>
		</div>
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
	export default {
		name: "index",
		data() {

		},
		methods: {

		}
	}
</script>

<style>
</style>
