import React from 'react'
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Card } from '@consta/uikit/Card';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import { Layout } from "@consta/uikit/Layout";
import { faker } from '@faker-js/faker';


const ServicePage = () => {
    return (
        <>
            <div>ServicePage</div>

            <Grid cols={3}>
                {[1, 2, 3, 4, 5].map((item) => {
                    return (
                        <GridItem>
                            <Card
                                key={item}
                                verticalSpace="xs"
                                horizontalSpace="xs">
                                <Layout>
                                    <img src="" alt="" />
                                    <Layout direction="column">
                                        <Text>{faker.lorem.sentence()}</Text>
                                        <Text>{faker.lorem.paragraph()}</Text>
                                    </Layout>
                                </Layout>
                            </Card>
                        </GridItem>
                    )
                })}
            </Grid>
        </>
    )
}

export default ServicePage;