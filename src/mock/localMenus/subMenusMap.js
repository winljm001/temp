/**
 * 如需添加路由去对应下面文件中去添加
 */

// 合作伙伴
import partnerMenu from './subMenus/partnerMenu'
// 交易
import tradeMenu from './subMenus/tradeMenu'
// 租车
import rentCarMenu from './subMenus/rentCarMenu'
// 配送
import distributionMenu from './subMenus/distributionMenu'
// 账户中心
import accountCenterMenu from './subMenus/accountCenterMenu'
const subMenus = {
  '10020000': partnerMenu,
  '10030000': tradeMenu,
  '10040000': rentCarMenu,
  '10050000': distributionMenu,
  '10060000': accountCenterMenu
}
export default subMenus
