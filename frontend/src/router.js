import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'

/* const Landing = () => import('@/pages/Landing.vue')
const Service = () => import('@/pages/Service.vue')
const About = () => import('@/pages/About.vue')
const Location = () => import('@/pages/Location.vue')
const Login = () => import('@/pages/Login.vue')
const NotFound = () => import('@/pages/NotFound.vue')
const Application = () => import('@/pages/Application.vue')
const Product = () => import('@/pages/Product.vue')
const History = () => import('@/pages/History.vue')
const Member = () => import('@/pages/Member.vue')
const Detail = () => import('@/pages/Detail.vue')
const Board = () => import('@/pages/Board.vue')
const Card = () => import('@/components/Card.vue')
const Card2 = () => import('@/components/Card2.vue')
const Card3 = () => import('@/components/Card3.vue')
const Contect = () => import('@/components/Contect.vue') */

import Landing from '@/pages/Landing.vue'
import Service from '@/pages/Service.vue'
import About from '@/pages/About.vue'
import Location from '@/pages/Location.vue'
import Login from '@/pages/Login.vue'
import NotFound from '@/pages/NotFound.vue'
import Application from '@/pages/Application.vue'
import Product from '@/pages/Product.vue'
import History from '@/pages/History.vue'
import Member from '@/pages/Member.vue'
import Board from '@/pages/Board.vue'
import BoardExpansion from '@/pages/BoardExpansion.vue'
import Contect from '@/pages/Contect.vue'
import Card from '@/components/Card.vue'
import Card2 from '@/components/Card2.vue'
import Card3 from '@/components/Card3.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
	
	/*scrollBehavior(to, from, savedPosition) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ x: 0, y: 0 })
			}, 500)
		})
	},*/
	/*scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			console.log(to.hash)
			return {
				selector: to.hash
				// , offset: { x: 0, y: 10 } 
			}
		}
	},*/
	routes: [
		{
			path: '*',
			name: 'NotFound',
			/* component: NotFound, */
			meta: {
				layout: 'detail',
				id: 0
			},
			components: {
				detail: NotFound
			}
		},
		/* component: Landing, */
		{
			path: '/',
			name: 'Landing',
			meta: {
				layout: 'default',
				id: 0
			},
			components: {
				router0: Landing
			}
		},
		/* component: Service, */
		{
			path: '/service/application',
			name: 'Application',
			meta: {
				layout: 'detail',
				id: 3
			},
			components: {
				detail: Application
			}
		},
		{
			path: '/service/product',
			name: 'Product',
			meta: {
				layout: 'detail',
				id: 7
			},
			components: {
				detail: Product
			}
		},
		{
			path: '/service',
			name: 'Service',
			meta: {
				layout: 'default',
				id: 1
			},
			components: {
				router0: Service,
				router1: Card,
				router2: Card2,
				router3: Card3
			},
			props: {
				router1: {
					id: 1,
					title: '판매중 제품',
					titleSub: '단순하게 편리하게',
					article: '당신은<br/><em>생각만</em><br/>하세요<br/>그후엔 우리가',
					src: require('./assets/images/olav-ahrens-rotne-1102458-unsplash.jpg'),
					label: '제품 구경하기',
					path: '/service/product',
					transition: 'slide-left'

				},
				router2: {
					id: 3,
					title: '주문제작품',
					titleSub: '웹 모바일 데스크탑 어떠한 환경이라도 제작',
					article: '비교<br/>선택<br/><em>성공적</em><br/>프로젝트',
					// src: require('./assets/images/new-data-services-Ar-iTL4QKl4-unsplash.jpg'),
					src: require('./assets/images/reza-namdari-1309908-unsplash.jpg'),
					label: '게임은 안만듬',
					path: '/service/application',
					transition: 'zoom-in'
				},
				router3: {
					id: 7,
					title: '같지만 다른',
					titleSub: '1%의 차이',
					article: '게임처럼 <em>즐기세요</em> 다양한 제품을',
					src: require('./assets/images/sleek-playstation-controller-picjumbo-com.jpg'),
					label: '준비중...',
					path: '', // '/service/system',
					transition: 'zoom-in'
				}
			}
		},
		/* component: about, */
		{
			path: '/about/history',
			name: 'History',
			components: {
				detail: History
			},
			meta: {
				layout: 'detail',
				id: 3
			}
		},
		{
			path: '/about/member',
			name: 'Member',
			components: {
				detail: Member
			},
			meta: {
				layout: 'detail',
				id: 7
			}
		},

		{
			path: '/about',
			name: 'About',
			meta: {
				layout: 'default',
				id: 2
			},
			components: {
				router0: About,
				router1: Card3,
				router2: Card,
				router3: Card2
			},
			props: {
				router0: {
					id: 0,
					title: '이야기',
					titleSub: 'half professional',
					article: '365일 24시간 어제도 오늘도 내일도 고민중인 사람들... 점심 메뉴로',
					src: require('./assets/images/william-white-34988-unsplash.jpg'),
					label: '',
					path: ''
				},
				router1: {
					id: 4,
					title: '내 집 같은',
					titleSub: 'I do not want to go home',
					article: '어서와 <em>이런 곳은</em> 처음이지',
					src: require('./assets/images/tyler-franta-589346-unsplash.jpg'),
					label: '',
					path: ''
				},
				router2: {
					id: 3,
					title: '월급받는 사람들',
					titleSub: 'Half professional',
					article: '때로는 <em>개발자</em>처럼 때로는 <em>사용자</em>처럼',
					src: require('./assets/images/nik-macmillan-280300.jpg'),
					label: '자주 보면 부끄러움',
					path: '/about/member'
				},
				router3: {
					id: 7,
					title: '걸어온 길',
					titleSub: 'Do the best way',
					label: '한번만 봐도 충분',
					article: '좋은 <em>회사</em> 찾다가 내가 차린 <em>회사</em>',
					src: require('./assets/images/daniel-cheung-554578-unsplash.jpg'),
					path: '/about/history',
					transition: 'slide-left'
				}
			}
		},
		/* component: Support, */
		{
			path: '/support/news',
			name: 'News',
			meta: {
				layout: 'detail',
				id: 3
			},
			components: {
				detail: Board
			}
		},
		{
			path: '/support/faq',
			name: 'Faq',
			components: {
				detail: BoardExpansion
			},
			meta: {
				layout: 'detail',
				id: 7
			}
		},
		{
			path: '/support',
			name: 'Support',
			meta: {
				layout: 'default',
				id: 3
			},
			components: {
				router0: Location,
				router1: Contect,
				router2: Card3,
				router3: Card
			},
			props: {
				router2: {
					id: 3,
					title: '새로운 소식',
					titleSub: 'notice & news',
					label: '점검중', // '뜨면 알려줄게',
					article: '새로운<br/>정보가<br/>있다면 <em>같이 </em>해요',
					src: require('./assets/images/remi-walle-86579-unsplash.jpg'),
					path: '/support'// '/support/news'
				},
				router3: {
					id: 7,
					title: '자주하는 질문',
					titleSub: '이것저것 다 있어요',
					article: '<em>묻기 전에</em><br/>한번 찾아봐',
					src: require('./assets/images/absolutvision-bSlHKWxxXak-unsplash.jpg'),
					label: '점검중', // '찾아 보기',
					path: '/support'// '/support/faq'
				}
			}
		},
		{
			path: '/login',
			name: 'Login',
			meta: {
				layout: 'detail',
				id: 0,
				title: 'login',
				titleSub: 'Page Not Found',
				article: 'sorry sorry sorry, but try again other menu',
				transition: 'slide-top',
				scrollToTop: true
			},
			components: {
				detail: Login
			}
		}
	]
})

export default router
