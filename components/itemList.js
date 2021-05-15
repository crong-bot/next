import React from 'react';
import { Grid } from 'semantic-ui-react';
import Styles from '../styles/ItemList.module.css';
import Link from 'next/link';

function ItemList({ list }) {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        {list.map((list) => (
          <Grid.Column>
            <Link href={`/view/${list.id}`}>
              <a>
                <div className={Styles.wrap}>
                  <img
                    src={list.image_link}
                    alt={list.name}
                    className={Styles.item_img}
                  />
                  <strong className={Styles.item_name}>{list.name}</strong>
                  <span className={Styles.item_info}>
                    {list.category}
                    {list.product_type}
                  </span>
                  <strong>{list.price}</strong>
                </div>
              </a>
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}

export default ItemList;
