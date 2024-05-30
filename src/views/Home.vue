<template>
  <div class="IdoAllContent">
    <!-- 头部 -->
    <header>
      <div class="Ido_title">
        <p>IDO</p>
      </div>
      <div class="Ido_id">
        <ul>
          <li>
            ID:
            <span>{{ headerData.ID }}</span>
          </li>
        </ul>
        <ul>
          <li>
            {{ headerData.Address?.slice(0, 6) }}...{{
              headerData.Address?.slice(-6)
            }}
          </li>
        </ul>
      </div>
    </header>
    <!-- 语言筛选 -->
    <div class="language">
      <transition name="slide">
        <ul v-show="langShow">
          <li @click="changeEN">
            <img src="@/assets/images/english.png" alt="" />
            <!-- <span>EN</span> -->
          </li>
          <li @click="changeZH">
            <img src="@/assets/images/china.png" alt="" />
            <!-- <span>CN</span> -->
          </li>
        </ul>
      </transition>
    </div>
    <!-- 倒计时 -->
    <section>
      <div class="Ido_Countdown">
        <div class="activity">
          <img src="@/assets/images/activity.png" alt="" />
          <div class="activity_title">
            <p>{{ $t("message.stillTime") }}</p>
            <ul @click="toggleList">
              <li>
                <span>{{ langText }}</span>
              </li>
              <li>
                <img :src="getImageUrlTabBar(imageLang)" alt="" />
              </li>
            </ul>
          </div>
          <!-- 倒计时时间 -->
          <div class="countdown_time">
            <ul>
              <li>{{ timeObject.days }}</li>
            </ul>
            <ul>
              <li>{{ $t("message.days") }}</li>
            </ul>
            <ul>
              <li>{{ timeObject.hours }}</li>
            </ul>
            <ul>
              <li>{{ $t("message.hours") }}</li>
            </ul>
            <ul>
              <li>{{ timeObject.minutes }}</li>
            </ul>
            <ul>
              <li>{{ $t("message.minutes") }}</li>
            </ul>
            <ul>
              <li>{{ timeObject.seconds }}</li>
            </ul>
            <ul>
              <li>{{ $t("message.seconds") }}</li>
            </ul>
          </div>
          <!-- 滚动条 -->
          <!-- <div class="progressBar">
            <van-progress pivot-text="  " :percentage="25" stroke-width="10" />
            <span>0.00%</span>
          </div> -->
          <!-- 立即参与 -->
          <div class="takePart">
            <van-button
              round
              type="success"
              @click="btnTakePart"
              :style="{ background: bgColor }"
            >
              {{ $t("message." + takePartTest) }}
            </van-button>
          </div>
          <!-- 注释 -->
          <div class="annotation">
            <p>
              {{ $t("message.annotation")
              }}<span>{{ $t("message.LPmining") }}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- 购买节点 -->
    <!-- <aside>
      <div class="Ido_NavNode">
        <ul>
          <li>
            <span>{{ $t("message.PurchaseNode") }}</span>
            <img src="@/assets/images/rigth.png" alt="" />
          </li>
          <li v-show="true">
            <span>SWAP</span>
            <img src="@/assets/images/rigth.png" alt="" />
          </li>
          <li v-show="true">
            <span>LP</span>
            <img src="@/assets/images/rigth.png" alt="" />
          </li>
        </ul>
      </div>
    </aside> -->
    <!-- 我的资产 -->
    <aside>
      <div class="Ido_MyAssets">
        <div class="MyAssets_box">
          <span>{{ $t("message.Myassets") }} </span>
          <img src="@/assets/images/box.png" alt="" />
        </div>
        <div class="incomeTotal">
          <ul>
            <li>0</li>
            <li>{{ $t("message.usdtNumber") }}</li>
          </ul>
          <ul v-show="true">
            <li>0</li>
            <li>{{ $t("message.myTeam") }}</li>
          </ul>
        </div>
      </div>
    </aside>
    <!-- 邀请码 -->
    <aside>
      <div class="Ido_inviteCode">
        <div class="inviteCode_box">
          <span>{{ $t("message.Invitationcode") }}</span>
          <img src="@/assets/images/box.png" alt="" />
        </div>
        <div class="incomeTotal">
          <div class="link">
            <p>{{ textUrl }}</p>
          </div>
          <div class="copyLink">
            <van-button round @click="btnCopy">
              {{ $t("message.copyLink") }}
            </van-button>
          </div>
        </div>
      </div>
    </aside>
    <!-- 订单列表 -->
    <article>
      <!-- 只有订单列表 -->
      <div class="Ido_OrderList" v-show="false">
        <!-- 订单列表 -->
        <span>{{ $t("message.orderStatus") }}</span>
        <div class="OrderList" v-show="true">
          <!-- 订单详情无数据状态 -->
          <div class="OrderList_context_notData">
            <ul>
              <li>
                <img src="@/assets/images/empty.png" alt="" v-show="false" />
                <p v-show="false">暂无数据</p>
              </li>
            </ul>
          </div>
          <!-- 订单详情有数据状态 -->
          <div class="OrderList_context_isData" v-show="false">
            <div class="OrderList_context_Datas">
              <ul class="datas_text">
                <li>
                  <ul>
                    <li>数量（USDT）</li>
                    <li>12000</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>订单状态</li>
                    <li>交易成功</li>
                  </ul>
                </li>
              </ul>
              <ul class="datas_text_addTime">
                <li>
                  <ul>
                    <li>添加时间：</li>
                    <li>2023-7-9 15:00</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="OrderList_context_Datas">
              <ul class="datas_text">
                <li>
                  <ul>
                    <li>数量（USDT）</li>
                    <li>12000</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>订单状态</li>
                    <li>交易失败</li>
                  </ul>
                </li>
              </ul>
              <ul class="datas_text_addTime">
                <li>
                  <ul>
                    <li>添加时间：</li>
                    <li>2023-7-9 15:00</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 订单列表、我的团队 -->
      <div class="Ido_Myteam">
        <div class="MyTeam">
          <ul class="myteam_nav">
            <li
              v-for="item in orderTeamList"
              :key="item.id"
              @click="getOrderTeam(item.id)"
              :class="{ actives: item.id === orderTeamisShow }"
            >
              {{ $t("message." + item.title) }}
            </li>
          </ul>
          <!-- 订单详情无数据状态 -->
          <div class="Myteam_context_notData">
            <ul>
              <li>
                <img
                  src="@/assets/images/empty.png"
                  alt=""
                  v-show="isShow.emptyImg"
                />
                <p v-show="isShow.emptyData">暂无数据</p>
              </li>
            </ul>
          </div>
          <!-- 订单列表 -->
          <div class="Myteam_orderList" v-show="isShow.orderListisShow">
            <!-- 订单详情有数据状态 -->
            <div class="OrderList_context_Datas">
              <ul class="datas_text">
                <li>
                  <ul>
                    <li>{{ $t("message.usdtNumber") }}</li>
                    <li>12000</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>{{ $t("message.orderStatus") }}</li>
                    <li>交易失败</li>
                  </ul>
                </li>
              </ul>
              <ul class="datas_text_addTime">
                <li>
                  <ul>
                    <li>{{ $t("message.CreationTime") }}</li>
                    <li>2023-7-9 15:00</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="OrderList_context_Datas">
              <ul class="datas_text">
                <li>
                  <ul>
                    <li>{{ $t("message.usdtNumber") }}</li>
                    <li>12000</li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>{{ $t("message.orderStatus") }}</li>
                    <li>交易失败</li>
                  </ul>
                </li>
              </ul>
              <ul class="datas_text_addTime">
                <li>
                  <ul>
                    <li>{{ $t("message.CreationTime") }}</li>
                    <li>2023-7-9 15:00</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- 团队收益 -->
          <div class="Myteam_teamList" v-show="isShow.teamListisShow">
            <ul class="teamList_content" v-for="item in 3" :key="item">
              <li>
                <ul>
                  <li>{{ $t("message.address") }}</li>
                  <li>
                    {{ headerData.Address?.slice(0, 3) }}...{{
                      headerData.Address?.slice(-3)
                    }}<span>&nbsp;{{ $t("message.invalid") }}</span>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>{{ $t("message.Referrals") }}</li>
                  <li>1000</li>
                </ul>
              </li>
              <!-- <li>
                <ul>
                  <li>{{ $t("message.Teamperformance") }}</li>
                  <li>1000.00</li>
                </ul>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </article>
  </div>
  <!-- 弹出框---提交订单 -->
  <div class="Ido_popup">
    <van-popup
      round
      position="bottom"
      v-model:show="popupisSubmit"
      :close-on-click-overlay="false"
      closeable
      close-icon="close"
    >
      <div class="openBox_popup">
        <p>{{ $t("message.Confirmorder") }}</p>
        <div class="faucet_popup">
          <ul class="faucetbul">
            <li>
              <img src="@/assets/images/faucet.png" alt="" />
            </li>
            <li>
              <p>{{ $t("message.LPmining") }}</p>
              <span
                >100USDT <span>{{ $t("message.rise") }}</span></span
              >
            </li>
          </ul>
        </div>
        <!-- 数量 -->
        <div class="number_popup">
          <ul class="number_box">
            <li>{{ $t("message.Quantity") }}</li>
            <li>
              <button @click="number > 0 ? number-- : null">-</button>
              <input :placeholder="number" />
              <button @click="number++">+</button>
            </li>
          </ul>
        </div>
        <!-- 合计 -->
        <div class="sum_popup">
          <ul class="sum_box">
            <li>{{ $t("message.total") }}</li>
            <li>{{ number * 100 }} &nbsp;<span>USDT</span></li>
          </ul>
        </div>
        <!-- 可用资产 -->
        <div class="availableAssets_popup">
          <!-- <ul class="assets_box">
            <li>{{ $t("message.Wallet") }}</li>
            <li>17375.00 <span>USDT</span></li>
          </ul> -->
        </div>
        <div class="Submit_popup">
          <ul class="submit_box1">
            <li>
              {{ $t("message.Actual") }}
              <p>{{ number * 100 }}&nbsp;<span>USDT</span></p>
            </li>
          </ul>
          <ul class="submit_box2">
            <li>
              <van-button
                round
                @click="btnSubmitOrder"
                :style="{ background: number === 0 ? 'gray' : '' }"
              >
                {{ $t("message.place") }}
              </van-button>
            </li>
          </ul>
        </div>
      </div>
    </van-popup>
  </div>
  <!-- 弹出框---选择支付方式 -->
  <div class="Ido_popupSelect">
    <van-popup
      round
      position="bottom"
      v-model:show="popupisSelect"
      :close-on-click-overlay="false"
      closeable
      close-icon="close"
    >
      <div class="openBox_popup">
        <p>{{ $t("message.Choosepayment") }}</p>
        <div class="needPay">
          <p>{{ $t("message.PaymentRequired") }}</p>
          <p>6000<span>USDT</span></p>
        </div>
        <div class="selectPay">
          <van-radio-group v-model="checked" @click="cancelSelection">
            <van-radio name="1" label-position="left">{{
              $t("message.balancePayment")
            }}</van-radio>
          </van-radio-group>
        </div>
        <div class="balance">
          <p>{{ $t("message.balance") }}<span>17375.00</span>USDT</p>
        </div>
        <!-- 支付 -->
        <div class="payment">
          <van-button round @click="btnSelect">{{
            $t("message.walletBalance")
          }}</van-button>
        </div>
      </div>
    </van-popup>
  </div>
  <!-- 弹出框---确定支付 -->
  <div class="Ido_popupConfirm">
    <van-popup
      round
      position="bottom"
      v-model:show="popupisConfirm"
      :close-on-click-overlay="false"
      closeable
      close-icon="close"
    >
      <div class="openBox_popup">
        <p class="confirm_p">{{ $t("message.Confirmpayment") }}</p>
        <div class="needPay">
          <p>6000<span>USDT</span></p>
        </div>
        <div class="selectPay">
          <ul class="selectPay_box">
            <li>{{ $t("message.Orderinformation") }}</li>
            <li>{{ $t("message.USDTtransfer") }}</li>
          </ul>
        </div>
        <div class="selectPay">
          <ul class="selectPay_box">
            <li>{{ $t("message.Paymentmethod") }}</li>
            <li>{{ $t("message.Walletb") }}</li>
          </ul>
        </div>
        <!-- 支付 -->
        <div class="payment">
          <van-button round @click="btnPayNow">{{
            $t("message.PayNow")
          }}</van-button>
        </div>
      </div>
    </van-popup>
  </div>
  <!-- 弹出框---是否放弃支付 -->
  <div class="Ido_isGiveUpPay">
    <van-popup
      round
      v-model:show="giveUpisShow"
      :close-on-click-overlay="false"
      :style="{ padding: '0', width: '300px', height: '125px' }"
    >
      <div class="openBox_popup">
        <div class="giveup_p">
          <p>{{ $t("message.waivepayment") }}</p>
        </div>
        <div class="giveup_button">
          <van-button @click="btnGiveUp">{{ $t("message.giveup") }}</van-button>
          <van-button @click="btnContinuePay">{{
            $t("message.Continuepayment")
          }}</van-button>
        </div>
      </div>
    </van-popup>
  </div>
  <!-- 弹出框---温馨提示 -->
  <div class="Ido_KindReminder">
    <van-popup
      v-model:show="ConfirfailedisShow"
      round
      style="overflow-y: initial"
      :fit="true"
      :close-on-click-overlay="false"
    >
      <div class="tip_paymentbalance">
        <!-- title -->
        <div class="p_text">
          <p>{{ $t("message.Kindreminder") }}</p>
        </div>
        <!-- 是否放弃支付 -->
        <div class="ifpayment">
          <!-- 提示图片 -->
          <div class="tip_img">
            <img src="@/assets/images/tip_balance.png" alt="" />
          </div>
          <div class="balance_text">
            <span>{{ $t("message.Insufficient") }}</span>
            <p>{{ $t("message.PleaseUSDT") }}</p>
          </div>
          <div class="tip_button">
            <van-button
              type="default"
              class="button_pay1"
              @click="btnBackHome"
              >{{ $t("message.Returnhomepage") }}</van-button
            >
            <van-button type="default" class="button_pay2" @click="btnOrder">{{
              $t("message.Vieworders")
            }}</van-button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
  <!-- 弹出框---支付成功与失败 -->
  <div class="Ido_succFail">
    <van-popup
      v-model:show="successisShow"
      round
      style="overflow-y: initial"
      :fit="true"
      :close-on-click-overlay="false"
    >
      <div class="tip_paymentbalance">
        <!-- title -->
        <div class="p_text">
          <p>温馨提示</p>
        </div>
        <!-- 是否放弃支付 -->
        <div class="ifpayment">
          <!-- 提示图片 -->
          <div class="tip_img">
            <img src="@/assets/images/sucss.png" alt="" />
          </div>
          <div class="balance_text">
            <span>支付成功</span>
          </div>
          <div class="tip_button">
            <van-button
              type="default"
              class="button_pay1"
              @click="btnPaySuccessBackHome"
              >返回首页</van-button
            >
            <van-button type="default" class="button_pay2" @click="btnOrder"
              >查看订单</van-button
            >
          </div>
        </div>
      </div>
    </van-popup>
  </div>
  <!-- 弹出框---请输入邀请码-->
  <div class="Ido_inviteCode">
    <van-popup
      v-model:show="inviteCodeisShow"
      round
      style="overflow-y: initial"
      :fit="true"
      :close-on-click-overlay="false"
    >
      <div class="tip_paymentbalance">
        <!-- title -->
        <div class="p_text">
          <p>{{ $t("message.Kindreminder") }}</p>
        </div>
        <!-- 是否放弃支付 -->
        <div class="ifpayment">
          <!-- 提示图片 -->
          <div class="tip_img">
            <input
              type="text"
              :placeholder="$t('message.inputCode')"
              v-model="requestLink"
            />
          </div>
          <div class="tip_button">
            <van-button type="default" class="button_pay1" @click="btnCufirm">{{
              $t("message.sure")
            }}</van-button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, reactive, watch } from "vue";
// 复制粘贴工具
import clipboard3 from "vue-clipboard3";
import { Toast } from "vant";
import { walletConnectStore } from "@/store/index";
// 引入封装倒计时
import countdown from "@/utils/countdown";
import { useI18n } from "vue-i18n";
/*=================连接钱包Ethers=========================*/
const store = walletConnectStore();

/*=================头部=========================*/
const headerData = reactive({
  ID: "5533388",
  Address: "",
});

/*=================语言选择=========================*/
// 语言的选择
const langShow = ref(false);
const langText = ref("EN");
const imageLang = ref("english.png");
const { $t } = getCurrentInstance().proxy;
const { locale } = useI18n();
// 英文
const changeEN = () => {
  locale.value = "en";
  langText.value = "EN";
  imageLang.value = "english.png";
  langShow.value = false;
  // changeLang('en-us')
};
// 中文
const changeZH = () => {
  locale.value = "zh";
  langText.value = "ZH";
  imageLang.value = "china.png";
  langShow.value = false;
  // changeLang('zh-cn')
};
// vue3 遍历图片的方法
const getImageUrlTabBar = (url) => {
  return new URL(`../assets/images/${url}`, import.meta.url).href;
};
const toggleList = () => {
  langShow.value = !langShow.value; // 点击切换显示状态
};
/*=================订单列表、团队收益========================*/
// 数据的隐藏显示状态
const isShow = reactive({
  emptyImg: false,
  emptyData: false,
  orderListisShow: true,
  teamListisShow: false,
});
const orderTeamList = reactive([
  {
    id: 0,
    title: "orderList",
  },
  {
    id: 1,
    title: "Teambenefits",
  },
]);
const orderTeamisShow = ref(0);
const getOrderTeam = (index) => {
  orderTeamisShow.value = index;
  if (orderTeamisShow.value === 0) {
    isShow.orderListisShow = true;
    isShow.teamListisShow = false;
  }
  if (orderTeamisShow.value === 1) {
    isShow.emptyImg = false;
    isShow.emptyData = false;
    isShow.orderListisShow = false;
    isShow.teamListisShow = true;
  }
};
/*=================倒计时=========================*/
const endTime = ref(Date.now() + 1000 * 60 * 60 * 24 *3); // 示例：3天后的时间
const timeObject = countdown(endTime.value);
const bgColor = ref("");

/*=================立即参与========================*/
const takePartTest = ref("JoinNow");
const btnTakePart = () => {
  popupisSubmit.value = true;
};
/*=================弹框--复制链接========================*/
const textUrl = ref("https：//xxxx.com");
const { toClipboard } = clipboard3();
const btnCopy = async () => {
  try {
    await toClipboard(textUrl.value);
    Toast.success($t('message.copysucc'));
  } catch (err) {
    Toast.fail($t('message.copyFail'));
  }
};
/*=================弹框--提交订单========================*/
const popupisSubmit = ref(false);
const number = ref(0);
const btnSubmitOrder = async () => {
  if (number.value !== 0) {
    // popupisSelect.value = true;
    Toast.loading({
      message: $t("message.LOADING"), // 设置加载提示文本
      forbidClick: true, // 设置是否禁用点击
      duration: 0, // 设置持续时间，0 表示不自动关闭
    });
    // 调用转账
    await store.submitOrderTx(number.value / 100);
  }
};
/*=================弹框--选择支付信息========================*/
const popupisSelect = ref(false);
const checked = ref("1");
const lastChecked = ref("1");
const cancelSelection = () => {
  if (checked.value === lastChecked.value) {
    checked.value = null; // 取消选中
  } else {
    lastChecked.value = checked.value;
  }
};
const btnSelect = () => {
  popupisConfirm.value = true;
};
/*=================弹框--确定支付========================*/
const popupisConfirm = ref(false);
const btnPayNow = () => {
  giveUpisShow.value = true;
};
/*=================弹框--是否放弃支付========================*/
const giveUpisShow = ref(false);
// 放弃
const btnGiveUp = () => {
  giveUpisShow.value = false;
};
// 继续支付
const btnContinuePay = () => {
  //   ConfirfailedisShow.value = true;
  successisShow.value = true;
};
/*=================弹框--温馨提示========================*/
const ConfirfailedisShow = ref(false);
// 返回首页
const btnBackHome = () => {
  ConfirfailedisShow.value = false;
};
// 查看订单
const btnOrder = () => {
  ConfirfailedisShow.value = false;
};
/*=================弹框--请输入邀请码========================*/
// 获取邀请码
// 入口没有token 则显示弹出层
const requestLink = ref("");
const getRequestLink = () => {
  const currentURL = window.location.href;
  const match = currentURL.match(/code=(\d+)/);
  // 如果链接有邀请码得话
  if (match) {
    requestLink.value = match[1];
  } else {
    console.log("请输入邀请码");
  }
};
const inviteCodeisShow = ref(false);
const btnCufirm = () => {
  inviteCodeisShow.value = false;
};

/*=================弹框--支付成功========================*/
const successisShow = ref(false);
const btnPaySuccessBackHome = () => {
  successisShow.value = false;
};
/*=================渲染--onMounted========================*/
onMounted(async () => {
  await store.connectWallet();
  await store.getBalaneof();
  headerData.Address = store.wallet?.address;
  getRequestLink();
});
/*=================渲染--倒计时监听========================*/
watch(
  [timeObject.days, timeObject.hours, timeObject.minutes, timeObject.seconds],
  ([d, h, m, s]) => {
    if (d === 0 && h === 0 && m === 0 && s === 0) {
      bgColor.value = "#E61F20";
      takePartTest.value = "activity";
      // 可在倒计时结束时执行其他逻辑
    }
  }
);
</script>

<style scoped lang="less">
.IdoAllContent {
  padding: 0px 16px 20px 16px;
  background-image: url("@/assets/images/bgc.png");
  background-size: cover;
  /* 设置背景图片大小和背景大小一样 */
  background-position: center;
  /* 图片居中 */
  height: 100%;

  header {
    margin-top: 0;

    .Ido_title {
      color: rgba(0, 0, 0, 1);
      text-align: center;
      font-size: 24px;
      font-weight: 550;
      margin-bottom: 10px;
    }

    .Ido_id {
      display: flex;
      justify-content: space-between;

      ul {
        li {
          font-weight: 550;
          color: rgba(0, 0, 0, 0.5);
          font-size: 16px;
        }
      }
    }
  }

  section {
    .Ido_Countdown {
      margin-top: 22.5px;

      .activity {
        position: relative;
        left: -10px;

        img {
          width: 361.09px;
          height: 273.96px;
        }

        .activity_title {
          width: 310px;
          position: absolute;
          top: 30px;
          padding: 0px 25px;
          display: flex;
          justify-content: space-between;

          p {
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: 550;
            color: rgba(0, 0, 0, 1);
          }

          ul {
            width: 60px;
            height: 25px;
            // background-color: #28292E;
            border-radius: 50px;
            border: 0.5px solid #28292e;
            display: flex;
            justify-content: center;
            align-items: center;

            li:nth-child(1) {
              font-size: 14px;
              margin-right: 2.75px;
            }

            li:nth-child(2) {
              display: flex;
              margin-left: 2.75px;

              img {
                width: 17px;
                height: 17px;
              }
            }
          }
        }

        // 倒计时
        .countdown_time {
          width: 320px;
          display: flex;
          // justify-content: space-around;
          position: absolute;
          top: 94px;
          padding-left: 25px;

          // padding-right: 00px;
          // padding: 0px 25px;
          /* 奇数项样式 */
          ul:nth-child(odd) {
            width: 40px;
            height: 35px;
            position: relative;
            border: 0.5px solid rgba(26, 127, 91, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(255, 249, 245, 1);
            // margin-right: 11px;

            li {
              font-size: 24px;
              font-weight: 550;
              color: rgba(0, 0, 0, 1);
            }

            /* 设置背景色为灰色 */
          }

          /* 偶数项样式 */
          ul:nth-child(even) {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 27.5px;
            height: 40px;
            margin-right: 11px;
            margin-left: 11px;

            li {
              font-size: 16px;
              font-weight: 550;
              color: rgba(0, 0, 0, 0.5);
            }

            /* 设置背景色为浅灰色 */
          }

          ul:nth-child(odd)::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: linear-gradient(
              to top left,
              transparent 50%,
              rgba(253, 20, 228, 0.9) 100%
            );
            // z-index: 0;
            /* 设置背景色为灰色 */
            background-clip: content-box;
            /* 限制背景仅限于内容框内 */
          }
        }

        // 进度条
        .progressBar {
          width: 310px;
          // justify-content: space-around;
          position: absolute;
          top: 145px;
          padding-left: 16px;
          z-index: 99;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .van-progress {
            width: 250px;
            background-color: rgba(245, 245, 245, 1);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
            /* 更大的阴影效果 */
            border-top-left-radius: 0;
            /* 左上角圆角 */
            border-bottom-left-radius: 0;

            /* 左下角圆角 */
            /deep/.van-progress__portion {
              background-color: rgba(190, 247, 156, 1);
              background-image: linear-gradient(
                  to bottom,
                  rgba(221, 240, 230, 1) 0%,
                  rgba(190, 247, 156, 33.3%) 33.3%,
                  rgba(181, 247, 217, 66.6%) 66.6%,
                  rgba(203, 241, 239, 100%) 100%
                )
                1;
            }

            /deep/.van-progress__pivot {
              min-width: 10px;
              min-height: 15px;
              color: rgba(230, 31, 32, 1);

              background-color: rgba(181, 247, 217, 1);
              // background-image: linear-gradient(to bottom, rgba(221, 240, 230, 1) 0%, rgba(190, 247, 156, 33.3%) 33.3%, rgba(181, 247, 217, 66.6%) 66.6%, rgba(203, 241, 239, 100%) 100%) 1;
            }
          }

          span {
            font-size: 16px;
            color: rgba(0, 0, 0, 1);
          }
        }

        // 立即参与
        .takePart {
          position: absolute;
          top: 60%;
          width: 361.09px;
          display: flex;
          justify-content: center;
          .van-button {
            width: 120px;
            height: 41px;
            background-color: rgba(26, 127, 91, 1);
            border: 0px;
          }
        }

        // 注释
        .annotation {
          position: absolute;
          width: 361.09px;
          // top: 230px;
          // padding-left: 25px;
          top: 80%;
          display: flex;
          justify-content: center;

          p {
            width: 250px;
            //   left: 50%;
            // transform: translateX(-50%);
            text-align: center;
            font-size: 12px;
            color: rgba(230, 31, 32, 1);

            span {
              color: rgba(51, 51, 51, 0.5);
            }
          }
        }
      }
    }
  }

  aside {
    .Ido_NavNode {
      margin-top: 20.5px;

      ul {
        display: flex;
        justify-content: space-around;

        li {
          width: 100%;
          height: 35px;
          background-color: rgba(26, 127, 91, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            font-size: 15px;
            margin-right: 9px;
            color: rgba(26, 127, 91, 1);
            font-weight: 549;
            font-family: Alibaba PuHuiTi 2-65 Medium;
          }

          img {
            width: 10px;
            height: 10px;
          }
        }

        li:nth-child(2) {
          margin-left: 12.5px;
          margin-right: 12.5px;
        }
      }
    }
  }

  // 我的资产
  aside {
    .Ido_MyAssets {
      margin-top: 16.5px;

      .MyAssets_box {
        position: relative;
        z-index: 99;

        span {
          position: absolute;
          top: 3px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 17.1px;
          color: rgba(51, 51, 51, 1);
          font-weight: 550;
        }

        img {
          display: block;
          margin: 0 auto;
          /* 图片水平居中 */
          width: 216.22px;
          height: 37.51px;
        }
      }

      .incomeTotal {
        height: 125px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7.82px;
        position: relative;
        top: -20px;

        ul {
          width: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          li:nth-child(1) {
            font-size: 30px;
            font-weight: 550;
            color: rgba(26, 127, 91, 1);
          }

          li:nth-child(2) {
            font-size: 15px;
            color: rgba(51, 51, 51, 0.5);
          }
        }

        ul:nth-child(2) {
          /* 50px减去1像素的边框宽度 */
          height: calc(50px - 1px);
          /* 边框宽度包含在内部盒子尺寸中 */
          border-left: 0.5px solid rgba(51, 51, 51, 0.2);
        }

        // ul {
        //     content: '';
        //     position: absolute;
        //     bottom: 0;
        //     left: 50%;
        //     /* 居中 */
        //     transform: translateX(-50%);
        //     width: .3733rem;
        //     height: .0533rem;
        //     /* 边框高度 */
        //     background-color: black;
        //     /* 边框颜色 */
        // }
      }
    }
  }

  // 邀请码
  aside {
    .Ido_inviteCode {
      .inviteCode_box {
        position: relative;
        z-index: 99;

        span {
          position: absolute;
          top: 3px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 17.1px;
          color: rgba(51, 51, 51, 1);
          font-weight: 550;
        }

        img {
          display: block;
          margin: 0 auto;
          /* 图片水平居中 */
          width: 216.22px;
          height: 37.51px;
        }
      }

      .incomeTotal {
        height: 180px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        border-radius: 7.82px;
        position: relative;
        top: -20px;

        .link {
          margin-top: 40px;
          width: 306.5px;
          height: 50px;
          background-color: rgba(245, 245, 245, 1);
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
          }
        }

        .copyLink {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          .van-button {
            width: 306.5px;
            height: 41px;
            background-color: rgba(26, 127, 91, 1);
            border: 0px;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }

  article {
    padding-bottom: 10px;
    .Ido_OrderList {
      background-image: url("@/assets/images/order.png");
      background-size: cover;
      /* 设置背景图片大小和背景大小一样 */
      background-position: center;
      height: 342.89px;

      span {
        margin-left: 21.5px;
        letter-spacing: 2px;
        font-size: 17.15px;
        font-weight: 550;
        color: rgba(51, 51, 51, 1);
      }

      .OrderList {
        // 无数据
        .OrderList_context_notData {
          margin-top: 88.5px;
          border-radius: 18.59px;
          display: flex;
          justify-content: cneter;
          align-items: center;
          position: absolute;

          ul {
            width: 342.57px;

            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border-left: 5px solid;
            border-image: linear-gradient(
                to bottom,
                rgba(221, 240, 230, 1) 0%,
                rgba(190, 247, 156, 33.3%) 33.3%,
                rgba(181, 247, 217, 66.6%) 66.6%,
                rgba(203, 241, 239, 100%) 100%
              )
              1;

            /* 设置渐变边框 */
            li {
              height: 106.87px;

              img {
                width: 161.49px;
                height: 101.56px;
                margin-bottom: 20px;
              }

              p {
                font-size: 14px;
                text-align: center;
                color: rgba(154, 159, 180, 1);
              }
            }
          }
        }

        // 有数据
        .OrderList_context_isData {
          .OrderList_context_Datas {
            position: relative;
            margin-top: 23.5px;
            background-color: rgba(245, 245, 245, 1);
            width: 303.5px;
            height: 115px;
            border-radius: 5px;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 13px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .datas_text {
              width: 278px;
              height: 60px;
              padding-top: 14px;
              border-bottom: 0.5px solid rgba(51, 51, 51, 0.2);

              li {
                font-size: 14px;
                color: rgba(51, 51, 51, 0.8);

                ul {
                  margin-bottom: 6px;
                  display: flex;
                  justify-content: space-between;

                  li {
                  }
                }
              }

              li:nth-child(2) {
                ul {
                  li:nth-child(2) {
                    color: rgba(26, 127, 91, 1);
                  }
                }
              }
            }

            .datas_text_addTime {
              width: 278px;
              height: 41px;
              margin-top: 10.5px;

              li {
                font-size: 14px;
                color: rgba(51, 51, 51, 0.8);

                ul {
                  margin-bottom: 6px;
                  display: flex;
                  justify-content: space-between;

                  li {
                  }
                }
              }
            }
          }
        }
      }
    }

    .Ido_Myteam {
      background-image: url("@/assets/images/order.png");
      background-size: cover;
      /* 设置背景图片大小和背景大小一样 */
      background-position: center;
      height: 300.89px;
      padding-top: 28px;

      .MyTeam {
        background-color: #fff;
        height: 301.1px;
        width: 342.57px;
        border-radius: 18.59px;

        .myteam_nav {
          font-size: 16px;
          color: rgba(51, 51, 51, 0.5);
          font-weight: 550;
          display: flex;
          align-items: center;

          li {
            margin-top: 15px;
          }

          li:nth-child(1) {
            margin-left: 20.5px;
            margin-right: 16.5px;
            // 选中状态
            // color: rgba(26, 127, 91, 1);
            // border-bottom: 2px solid rgba(26, 127, 91, 1);
          }

          .actives {
            color: rgba(26, 127, 91, 1);
            border-bottom: 2px solid rgba(26, 127, 91, 1);
          }

          //     li::before {
          //     content: '';
          //     position: absolute;
          //     bottom: 0;
          //     left: 50%;
          //     /* 居中 */
          //     transform: translateX(-50%);
          //     width: .3733rem;
          //     height: .0533rem;
          //     /* 边框高度 */
          //     background-color: black;
          //     /* 边框颜色 */
          // }
        }

        // 无数据
        .Myteam_context_notData {
          margin-top: 64.5px;
          border-radius: 18.59px;
          display: flex;
          justify-content: cneter;
          align-items: center;
          position: absolute;

          ul {
            width: 342.57px;

            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            border-left: 5px solid;
            border-image: linear-gradient(
                to bottom,
                rgba(221, 240, 230, 1) 0%,
                rgba(190, 247, 156, 33.3%) 33.3%,
                rgba(181, 247, 217, 66.6%) 66.6%,
                rgba(203, 241, 239, 100%) 100%
              )
              1;

            /* 设置渐变边框 */
            li {
              height: 106.87px;

              img {
                width: 161.49px;
                height: 101.56px;
                margin-bottom: 20px;
              }

              p {
                font-size: 14px;
                text-align: center;
                color: rgba(154, 159, 180, 1);
              }
            }
          }
        }

        // 订单列表
        .Myteam_orderList {
          background-color: #fff;
          border-radius: 18.59px;
          padding-bottom: 5px;

          .OrderList_context_Datas {
            position: relative;
            margin-top: 10.5px;
            background-color: rgba(245, 245, 245, 1);
            width: 303.5px;
            height: 120px;
            border-radius: 5px;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 13px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .datas_text {
              width: 278px;
              height: 60px;
              padding-top: 14px;
              border-bottom: 0.5px solid rgba(51, 51, 51, 0.2);

              li {
                font-size: 14px;
                color: rgba(51, 51, 51, 0.8);

                ul {
                  margin-bottom: 6px;
                  display: flex;
                  justify-content: space-between;

                  li {
                  }
                }
              }

              li:nth-child(2) {
                ul {
                  li:nth-child(2) {
                    color: rgba(26, 127, 91, 1);
                  }
                }
              }
            }

            .datas_text_addTime {
              width: 278px;
              height: 41px;
              margin-top: 10.5px;

              li {
                font-size: 14px;
                color: rgba(51, 51, 51, 0.8);

                ul {
                  margin-bottom: 6px;
                  display: flex;
                  justify-content: space-between;

                  li {
                  }
                }
              }
            }
          }
        }

        // 团队收益
        .Myteam_teamList {
          .teamList_content {
            position: relative;
            margin-top: 27px;
            margin-bottom: 23px;
            padding-bottom: 13.5px;
            border-bottom: 1px solid rgba(233, 233, 233, 0.3);
            width: 303.5px;
            border-radius: 5px;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 13px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            li {
              ul {
                li:nth-child(1) {
                  font-size: 11px;
                }

                li:nth-child(2) {
                  font-size: 13.5px;

                  span {
                    color: rgba(222, 41, 16, 1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // 弹出语言
  .language {
    position: absolute;
    z-index: 99;
    right: 44.5px;

    ul {
      display: flex;
      flex-direction: row-reverse;
      flex-direction: column;
      /* 改变主轴方向为从右到左 */
      overflow-y: auto;

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin-left: 10px;
        margin-top: 5px;

        span {
          font-size: 14px;
        }

        img {
          width: 17px;
          height: 17px;
        }
      }
    }

    ul::-webkit-scrollbar {
      display: none;
    }
  }
}

// 弹出框---提交订单
.Ido_popup {
  .van-popup {
    .openBox_popup {
      min-height: 425px;
      padding: 10px 15px 0px 15px;

      p {
        font-weight: 550;
        font-size: 20px;
        color: rgba(51, 51, 51, 1);
      }

      .faucet_popup {
        margin-top: 22.5px;
        width: 343px;
        height: 80px;
        border: 0.5px solid rgba(112, 112, 112, 1);
        border-radius: 5px;
        display: flex;
        align-items: center;

        .faucetbul {
          display: flex;
          align-items: center;

          li {
            margin-left: 10.5px;

            // height: 59.5px;
            img {
              width: 59.5px;
              height: 59.5px;
            }

            p {
              line-height: 16px;
              font-size: 15px;
              font-weight: 550;
              color: rgba(51, 51, 51, 1);
            }

            span {
              font-size: 17px;
              font-weight: 550;
              color: rgba(27, 128, 91, 1);
            }
          }

          li:nth-child(2) {
            display: flex;
            flex-direction: column;
          }
        }
      }

      .number_popup {
        margin-top: 16px;
        width: 343px;
        height: 50px;
        border: 0.5px solid rgba(112, 112, 112, 1);
        border-radius: 5px;
        display: flex;
        align-items: center;

        .number_box {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          padding-left: 10.5px;
          padding-right: 19.5px;

          li {
            font-size: 15px;
            color: rgba(51, 51, 51, 0.5);
          }

          li:nth-child(2) {
            display: flex;
            align-items: center;

            button:nth-child(1) {
              font-size: 17px;
              color: #fff;
              border: 0;
              width: 23px;
              height: 23px;
              background-color: rgba(235, 233, 233, 1);
            }

            input {
              text-align: center;
              margin-left: 7px;
              margin-right: 7px;
              font-size: 17px;
              color: black;
              width: 54px;
              height: 23px;
              border: 0;
              background-color: rgba(244, 244, 244, 0.5);
            }

            button:nth-child(3) {
              font-size: 17px;
              color: #fff;
              border: 0;
              width: 23px;
              height: 23px;
              background-color: rgba(27, 128, 91, 1);
            }
            // button:hover {
            //   background-color: #e0e0e0;
            // }

            button:active {
              background-color: #d0d0d0;
            }
          }
        }
      }

      .sum_popup {
        margin-top: 16px;
        width: 343px;
        height: 50px;
        border: 0.5px solid rgba(112, 112, 112, 1);
        border-radius: 5px;
        display: flex;
        align-items: center;

        .sum_box {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          padding-left: 10.5px;
          padding-right: 19.5px;

          li {
            font-size: 15px;
            color: rgba(51, 51, 51, 0.5);
          }

          li:nth-child(2) {
            display: flex;
            align-items: center;
            font-size: 18px;
            color: rgba(27, 128, 91, 1);
          }
        }
      }

      .availableAssets_popup {
        margin-top: 6px;

        .assets_box {
          display: flex;
          justify-content: space-between;

          li {
            color: rgba(51, 51, 51, 0.5);
            font-size: 15px;
          }
        }
      }

      .Submit_popup {
        margin-top: 80.5px;
        height: 68px;
        border-top: 0.5px solid rgba(168, 168, 168, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .submit_box1 {
          display: flex;
          justify-content: center;
          align-items: center;

          li {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            color: rgba(51, 51, 51, 1);

            p {
              text-align: center;
              font-size: 18px;
              color: rgba(27, 128, 91, 1);
            }
          }
        }

        .submit_box2 {
          display: flex;
          justify-content: center;
          align-items: center;

          li {
            display: flex;
            justify-content: center;
            align-items: center;

            .van-button {
              width: 120px;
              color: #fff;
              background-color: rgba(27, 128, 91, 1);
            }
          }
        }
      }
    }
  }
}

// 弹出框---选择支付方式
.Ido_popupSelect {
  .van-popup {
    .openBox_popup {
      min-height: 425px;
      padding: 10px 15px 0px 15px;

      p {
        font-weight: 550;
        font-size: 20px;
        color: rgba(51, 51, 51, 1);
      }

      .needPay {
        font-weight: 0;
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
          font-size: 16px;
          color: rgba(51, 51, 51, 0.5);
        }

        p:nth-child(2) {
          font-size: 25px;
          color: rgba(51, 51, 51, 1);
          font-weight: 550;
        }
      }

      .selectPay {
        margin-top: 16px;
        width: 343px;
        height: 50px;
        border: 1px solid rgba(112, 112, 112, 1);
        border-radius: 5px;
        display: flex;
        align-items: center;
        .van-radio-group {
          width: 100%;
          /deep/.van-radio {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 10.5px;
            padding-right: 19.5px;

            .van-radio__label {
              font-size: 15px;
            }
            .van-radio__icon {
              .van-badge__wrapper {
                background-color: rgba(27, 128, 91, 1);
                color: #fff;
              }
            }
          }
        }
      }

      .balance {
        margin-top: 9px;

        p {
          font-size: 14px;
          color: rgba(45, 142, 105, 1);
        }
      }

      .payment {
        margin-top: 122px;

        .van-button {
          color: #fff;
          width: 343px;
          height: 44px;
          background-color: rgba(27, 128, 91, 1);
          letter-spacing: 2px;
        }
      }
    }
  }
}

// 弹出框---确定支付
.Ido_popupConfirm {
  .van-popup {
    .openBox_popup {
      min-height: 425px;
      padding: 10px 15px 0px 15px;

      p {
        font-weight: 550;
        font-size: 20px;
        color: rgba(51, 51, 51, 1);
      }

      .needPay {
        font-weight: 0;
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
          font-weight: 550;
          font-size: 25px;
          color: rgba(51, 51, 51, 1);
        }
      }

      .selectPay {
        margin-top: 16px;
        width: 343px;
        height: 50px;
        border: 1px solid rgba(112, 112, 112, 1);
        border-radius: 5px;
        display: flex;
        align-items: center;

        .selectPay_box {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          padding-left: 10.5px;
          padding-right: 19.5px;

          li {
            font-size: 15px;
            color: rgba(51, 51, 51, 1);
          }

          li:nth-child(2) {
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }

      .balance {
        margin-top: 9px;

        p {
          font-size: 14px;
          color: rgba(45, 142, 105, 1);
        }
      }

      .payment {
        margin-top: 122px;

        .van-button {
          color: #fff;
          width: 343px;
          height: 44px;
          background-color: rgba(27, 128, 91, 1);
          letter-spacing: 2px;
        }
      }
    }
  }
}

// 弹出框---是否放弃支付
.Ido_isGiveUpPay {
  .van-popup {
    .openBox_popup {
      .giveup_p {
        height: 76.5px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-size: 20px;
          font-weight: 550;
          color: rgba(51, 51, 51, 1);
          text-align: center;
        }
      }

      .giveup_button {
        display: flex;

        .van-button {
          font-size: 18px;
          color: rgba(51, 51, 51, 0.5);
          width: 150px;
          font-weight: 550;
        }

        .van-button:nth-child(2) {
          color: rgba(28, 129, 92, 1);
        }
      }
    }
  }
}

// 弹出框---温馨提示
.Ido_KindReminder {
  .tip_paymentbalance {
    border-radius: 5px;
    width: 343px;
    height: 305px;
    background-image: url("@/assets/images/bgc.png");
    background-size: cover;
    // background-position: center;
    background-repeat: no-repeat;

    .p_text {
      height: 57px;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-weight: bold;
        font-size: 20px;
        color: #333333;
      }
    }

    .ifpayment {
      margin-left: 16.5px;
      margin-right: 16.5px;
      border-radius: 7.5px;
      height: 225px;
      background-color: rgba(255, 255, 255, 1);

      .tip_img {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          margin-top: 28.5px;
          width: 53.25px;
          height: 50.86px;
        }
      }

      // padding-top: 25px;
      .balance_text {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 11.5px;
        font-weight: 550;

        span {
          font-weight: Medium;
          font-size: 18px;
          color: #ff4141;
        }

        p {
          width: 300px;
          // margin-top: 55px;
          font-size: 15px;
          color: #333333;
          text-align: center;
          // white-space: nowrap;
          /* 防止文本换行 */
          // overflow: hidden;
          /* 隐藏溢出的文本 */
          // text-overflow: ellipsis;
          /* 当文本溢出时使用省略号来表示 */
        }
      }

      .tip_button {
        margin-top: 22.5px;
        display: flex;
        justify-content: space-around;

        .button_pay1 {
          border-radius: 7px;
          width: 138px;
          height: 44px;
          background-color: rgba(229, 229, 229, 1);
          color: rgba(102, 102, 102, 1);
        }

        .button_pay2 {
          border-radius: 7px;
          width: 138px;
          height: 44px;
          background-color: rgba(18, 144, 127, 1);
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
// 弹出框---支付成功与失败
.Ido_succFail {
  .tip_paymentbalance {
    border-radius: 5px;
    width: 343px;
    height: 280px;
    background-image: url("@/assets/images/bgc.png");
    background-size: cover;
    // background-position: center;
    background-repeat: no-repeat;

    .p_text {
      height: 57px;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-weight: bold;
        font-size: 20px;
        color: #333333;
      }
    }

    .ifpayment {
      margin-left: 16.5px;
      margin-right: 16.5px;
      border-radius: 7.5px;
      height: 200px;
      background-color: rgba(255, 255, 255, 1);

      .tip_img {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          margin-top: 28.5px;
          width: 53.25px;
          height: 50.86px;
        }
      }

      // padding-top: 25px;
      .balance_text {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 11.5px;
        font-weight: 550;

        span {
          font-weight: Medium;
          font-size: 18px;
          color: rgba(51, 51, 51, 1) 1;
        }

        p {
          width: 300px;
          // margin-top: 55px;
          font-size: 15px;
          color: #333333;
          text-align: center;
          // white-space: nowrap;
          /* 防止文本换行 */
          // overflow: hidden;
          /* 隐藏溢出的文本 */
          // text-overflow: ellipsis;
          /* 当文本溢出时使用省略号来表示 */
        }
      }

      .tip_button {
        margin-top: 22.5px;
        display: flex;
        justify-content: space-around;

        .button_pay1 {
          font-size: 16px;
          border-radius: 7px;
          width: 110px;
          height: 44px;
          background-color: rgba(229, 229, 229, 1);
          color: rgba(102, 102, 102, 1);
        }

        .button_pay2 {
          font-size: 16px;
          border-radius: 7px;
          width: 110px;
          height: 44px;
          background-color: rgba(18, 144, 127, 1);
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
// 弹出框---填写邀请码
.Ido_inviteCode {
  .van-popup {
    .tip_paymentbalance {
      border-radius: 5px;
      width: 343px;
      height: 270px;
      background-image: url("@/assets/images/bgc.png");
      background-size: cover;
      // background-position: center;
      background-repeat: no-repeat;

      .p_text {
        height: 57px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-weight: bold;
          font-size: 20px;
          color: #333333;
        }
      }

      .ifpayment {
        margin-left: 16.5px;
        margin-right: 16.5px;
        border-radius: 7.5px;
        height: 180px;
        background-color: rgba(255, 255, 255, 1);

        .tip_img {
          display: flex;
          justify-content: center;
          align-items: center;

          input {
            margin-top: 37px;
            width: 280px;
            height: 50px;
            font-size: 15px;
            color: rgba(51, 51, 51, 0.5);
            padding-left: 13.6px;
            border: 0.05px solid rgba(140, 140, 140, 0.5);
            border-radius: 5px;
          }
        }

        .tip_button {
          margin-top: 30px;
          display: flex;
          justify-content: space-around;

          .button_pay1 {
            font-size: 16px;
            border-radius: 7px;
            width: 110px;
            height: 44px;
            background-color: rgba(26, 127, 91, 1);
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}
</style>
