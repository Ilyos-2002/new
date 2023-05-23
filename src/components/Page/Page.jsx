import { Tabs } from 'antd';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: `Просмотренные`,

    },
    {
        key: '2',
        label: `Выбор редакции`,

    },
    {
        key: '3',
        label: `Сниженные цены`,

    },
];
const Page = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default Page;