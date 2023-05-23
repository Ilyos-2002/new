import { Tabs } from 'antd';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: `Новые объявления`,

    },
    {
        key: '2',
        label: `Лучщие предложение`,

    },

];
const Page2 = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default Page2;