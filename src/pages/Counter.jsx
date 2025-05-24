import {
  Container,
  Title,
  CountDisplay,
  StatusBadge,
  ButtonContainer,
  DecrementButton,
  IncrementButton,
  ResetButton,
} from "../styles/CommonStyles";

// 使用 let 自动转换为 ref，不需要手动调用 ref() 和 .value
let count = 0;

function increment() {
  // 不需要 .value，自动转换
  count++;
}

function decrement() {
  // 不需要 .value，自动转换
  count--;
}

// 使用 @computed 注解创建计算属性
// @computed
const doubleCount = count * 2;
// @computed
const countStatus = count === 0 ? "零" : count > 0 ? "正数" : "负数";

// 使用 $: 语法创建响应式效果（自动转换为 watchEffect）
$: console.log(`当前计数: ${count}, 两倍值: ${doubleCount}`);

function reset() {
  count = 0;
}

export default (
  <Container>
    <Title>计数器应用</Title>
    <p>
      当前计数: <CountDisplay>{count}</CountDisplay>
      <StatusBadge status={countStatus}>{countStatus}</StatusBadge>
    </p>
    <p>双倍值: {doubleCount}</p>
    <ButtonContainer>
      <DecrementButton onClick={decrement}>减少</DecrementButton>
      <IncrementButton onClick={increment}>增加</IncrementButton>
    </ButtonContainer>
    <ButtonContainer>
      <ResetButton onClick={reset}>重置</ResetButton>
    </ButtonContainer>
  </Container>
);
