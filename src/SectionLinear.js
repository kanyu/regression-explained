/**
 * Section on linear regression.
 */
import _ from 'lodash';
import Flexbox from 'flexbox-react';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import icecream from './icecream.json';

import DataMatrix from './components/DataMatrix';
import RegressionChart from './components/RegressionChart';
import { actions } from './reducers/index';

class SectionLinear extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,

    dispatch: PropTypes.func.isRequired,
    onPointDrop: PropTypes.func.isRequired,
  };

  render() {
    return (
      <section>
        <h2>What is regression?</h2>
        <p>
          In this tutorial, we're going to learn about regression, one of the
          the most important concepts in machine learning. TODO(sam): Finish
          this.
        </p>

        <Flexbox justifyContent="space-between">
          <RegressionChart
            width={400}
            height={300}
            axisBounds={{
              x: { min: 4.5, max: 7 },
              y: { min: 3.5, max: 7 },
            }}
            data={this.props.data}
            onPointDrop={this.props.onPointDrop}
          />
          <DataMatrix data={this.props.data} col={'x'} />
          <DataMatrix data={this.props.data} col={'y'} />
        </Flexbox>
      </section>
    );
  }
}

const mapStateToProps = state => state.linear;
const mapDispatchToProps = dispatch => {
  return {
    onPointDrop: (index, point) =>
      dispatch(actions.linear.setDatum(index, point)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionLinear);
