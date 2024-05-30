import { reactive, toRefs, onMounted, onUnmounted  } from 'vue';

const countdown = (endTime) => {
    const timeObject = reactive({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        coundtZero:0
    });

    const updateCountdown = () => {
        const now = Date.now();
        const countdown_time = endTime - now;
        if (countdown_time <= 0) {
            clearInterval(interval);
            // 发送倒计时结束事件
            return;
        }
        // 天
        timeObject.days = Math.floor(countdown_time / 1000 / 60 / 60 / 24);
        // 时
        const hours = Math.floor(countdown_time / 1000 / 60 / 60 % 24);
        timeObject.hours = hours < 10 ? hours : hours;
        // 分
        const minutes = Math.floor(countdown_time / 1000 / 60 % 60);
        timeObject.minutes = minutes < 10 ? minutes : minutes;
        // 秒
        const seconds = Math.floor(countdown_time / 1000 % 60);
        timeObject.seconds = seconds < 10 ? seconds : seconds;
    };

    let interval = setInterval(updateCountdown, 1000); // 每秒执行一次

    // 在组件卸载时清除定时器
    onUnmounted(() => {
        clearInterval(interval);
    });

    // 在组件挂载时开始倒计时
    onMounted(() => {
        updateCountdown();
    });

    return toRefs(timeObject);
};
export default countdown;
