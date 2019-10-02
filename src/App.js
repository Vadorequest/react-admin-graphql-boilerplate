import get from 'lodash/get';

import buildPrismaProvider, { buildQuery } from 'ra-data-opencrud';
import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';

import './App.css';
import { OrganisationList, OrganisationShow } from './components/organisations';
import overridenQueries from './queries/index';

const enhanceBuildQuery = buildQuery => introspectionResults => (
  fetchType,
  resourceName,
  params,
) => {
  const fragment = get(overridenQueries, `${resourceName}.${fetchType}`);

  return buildQuery(introspectionResults)(
    fetchType,
    resourceName,
    params,
    fragment,
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { dataProvider: null };
  }

  componentDidMount() {
    buildPrismaProvider({
      clientOptions: {
        uri:
          "https://cache.staging.demo.the-funding-place.org/cache-query"
      },
      buildQuery: enhanceBuildQuery(buildQuery),
    }).then(dataProvider => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin title="TFP Back Office" dataProvider={dataProvider}>
        <Resource name="Organisation" list={OrganisationList} show={OrganisationShow} />
        {/*<Resource name="Product" list={ProductList} edit={ProductEdit} />*/}
        {/*<Resource name="Order" list={OrderList} />*/}
        {/*<Resource*/}
        {/*  name="Brand"*/}
        {/*  list={BrandList}*/}
        {/*  edit={BrandEdit}*/}
        {/*  show={BrandShow}*/}
        {/*  create={BrandCreate}*/}
        {/*/>*/}
        {/*<Resource*/}
        {/*  name="Attribute"*/}
        {/*  list={AttributeList}*/}
        {/*  edit={AttributeEdit}*/}
        {/*  show={AttributeShow}*/}
        {/*  create={AttributeCreate}*/}
        {/*/>*/}
        {/*<Resource*/}
        {/*  name="Category"*/}
        {/*  list={CategoryList}*/}
        {/*  edit={CategoryEdit}*/}
        {/*  show={CategoryShow}*/}
        {/*  create={CategoryCreate}*/}
        {/*/>*/}
        {/*<Resource name="Shop" list={ShopList} edit={ShopEdit} />*/}
        {/*<Resource*/}
        {/*  name="Option"*/}
        {/*  list={OptionList}*/}
        {/*  edit={OptionEdit}*/}
        {/*  show={OptionShow}*/}
        {/*  create={OptionCreate}*/}
        {/*/>*/}
        {/*<Resource name="OptionValue" />*/}
        {/*<Resource name="SelectedOption" />*/}
        {/*<Resource name="Variant" />*/}
        {/*<Resource name="User" />*/}
        {/*<Resource name="OrderLineItem" />*/}
      </Admin>
    );
  }
}

export default App;
