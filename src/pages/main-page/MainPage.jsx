// import React from "react";
// import { useState } from "react";
// import { Card } from '@consta/uikit/Card';
// import { Button } from '@consta/uikit/Button';
// import { Text } from '@consta/uikit/Text';
// import { Layout } from "@consta/uikit/Layout";
// import { faker } from '@faker-js/faker';

// const MainPage = () => {

//     const [counter, setCounter] = useState({
//         createdAt: '',
//         name: '',
//         description: '',
//         id: '',
//     });

//     console.log(counter.incCount)

//     return (
//         <>
//             <div>Главная страница</div>
//             {[1, 2, 3, 4, 5].map((item) => {
//                 return (<Card
//                     key={item}
//                     verticalSpace="xs"
//                     horizontalSpace="xs">
//                     <Layout>
//                         <img src="" alt="" />
//                         <Layout direction="column">
//                             <Text>{faker.lorem.sentence()}</Text>
//                             <Text>{faker.lorem.paragraph()}</Text>
//                         </Layout>
//                     </Layout>
//                 </Card>)
//             })}
//             <Button
//             label='Увеличить значение'
//                 onClick={() => {
//                     setCounter((prevState) => ({
//                         ...prevState,
//                         count: prevState.count + 1
//                     }));
//                 }}
//             />
//         </>
//     )
// }

// export default MainPage;




import NewsList from "../../components/news-list/NewsList";
import axios from "axios";
import { useEffect, useState } from "react";
import { urlApi } from "../../const";

const MainPage = () => {
    const URLNews = `${urlApi}main`;
    const [newsState, setNews] = useState([]);

    useEffect(() => {
        axios.get(URLNews)
            .then((response) => {
                const mainList = response.data;
                setNews(mainList);
            })
            .catch((error) => {
                console.error("Error fetching news data:", error);
            });
    }, [URLNews]);

    return (
        <>
        <div>Главная страница</div>
        <div>
            <NewsList data={newsState} />
        </div>
        </>
    );
};

export default MainPage;
