import { defineStore } from "pinia";
import { ref, reactive, getCurrentInstance } from 'vue'
import { ethers } from 'ethers';
import ERC20 from '@/utils/contract/erc20.json'
import BigNumber from 'bignumber.js';
import { Toast } from "vant";
export const walletConnectStore = defineStore('walletConnect', () => {
    const { $t } = getCurrentInstance().proxy;
    const isConnected = ref(false);
    const wallet = ref(null);
    const error = ref(null);
    // usdt余额
    const usdtBalance = ref('');
    // 连接钱包
    const connectWallet = async () => {
        try {
            // 连接钱包的逻辑
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            wallet.value = {
                provider,
                signer,
                address
            };
            isConnected.value = true;
            return { provider, signer, address }
        } catch (error) {
            error.value = error.message;
            isConnected.value = false;
        }
    }
    // USDT余额查询
    const getBalaneof = async () => {
        try {
            const { provider, signer, address } = await connectWallet()
            // 合约交互
            const BalanceContract = new ethers.Contract(
                '0x55d398326f99059ff775485246999027b3197955',//合约地址
                ERC20,//合约json--合约abi
                signer //一个签名者
            )
            const balance = await BalanceContract.balanceOf(address)
            usdtBalance.value = balance.toString();
            console.log(usdtBalance.value, 'usdtBalance.value');
        } catch (error) {
            console.error("获取余额失败");
        }
    }
    // 转账逻辑
    const submitOrderTx = async (usdtNumber) => {
        const amount = BigNumber(usdtNumber).times(1e18).toFixed(0);
        console.log(BigNumber(usdtBalance.value).gt(amount), '商品價格');
        if (BigNumber(usdtBalance.value).gt(amount)) {
            try {
                const { provider, signer, address } = await connectWallet()
                const toAddress = "0x952C3dB7F8461f1D680F49f279f28751B73C7A8d"


                // 合约交互
                const usdtContract = new ethers.Contract(
                    '0x55d398326f99059ff775485246999027b3197955',//合约地址
                    ERC20,//合约json--合约abi
                    signer //一个签名者
                )
                // 余额查询
                // 转账合约
                usdtContract.transfer(
                    toAddress,
                    amount,
                    {
                        gasLimit: 50000 // 你可以根据具体情况设置合适的燃气限额
                    }
                ).then((tx) => {
                    const transactionHash = tx.hash;
                    console.log(transactionHash, 'transactionHash');
                    Toast.clear();
                    Toast.success({
                        message: $t('message.paySucc'),
                        duration: 2000 // 设置持续时间为 2000 毫秒（2 秒）
                    });
                }).catch((err) => {
                    Toast.clear();
                    Toast.fail({
                        message: $t('message.payFail'),
                        duration: 2000 // 设置持续时间为 2000 毫秒（2 秒）
                    });
                    console.error("转账失败！");
                })
            } catch (error) {
                // 处理错误
                console.error(error);
            }
        }else{
            Toast.clear();
            Toast.fail({
                message: $t('message.usdtBalance'),
                duration: 1000 // 设置持续时间为 2000 毫秒（2 秒）
            });
        }


    }

    // async disconnectWallet() {
    //   try {
    //     // 断开钱包连接的逻辑
    //     this.wallet = null;
    //     this.isConnected = false;
    //     this.error = null;
    //   } catch (error) {
    //     this.error = error.message;
    //   }
    // }
    return {
        isConnected,
        wallet,
        error,
        connectWallet,
        submitOrderTx,
        getBalaneof
    }
})
