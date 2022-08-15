import { Box, Typography } from '@material-ui/core';
import Rating from './Rating.js';
import SentimentCard from './SentimentCard1.js';
import { ButtonGroup } from '../../components/Button';

import instagram from '../../assets/images/social/instagram.png';
import finviz from '../../assets/images/social/finviz.png';
import linkedin from '../../assets/images/social/linkedin.png';
import reddit from '../../assets/images/social/reddit.png';
import twitter from '../../assets/images/social/twitter.png';
import google from '../../assets/images/social/google.png';

import useStyles from './styles.js';
import TextInput from '../../components/TextInput/index.js';
import AutoComplete from '../../components/AutoComplete/index.js';
import { useState } from 'react';

const Mobile = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState({
    search: '',
    cleaned_search: '',
  });
  const [autoCompleteItems, setAutoCompleteItems] = useState([]);

  const items = [
    {
      title: 'Instagram',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et. Euismod volutpat integer enim potenti litora, dui sodales ante.',
      icon: instagram,
      percentage: 70,
      sentiment: 82,
      subjectivity: 15,
    },
    {
      title: 'FinViz',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et. Euismod volutpat integer enim potenti litora, dui sodales ante.',
      icon: finviz,
      percentage: 70,
      sentiment: 82,
      subjectivity: 15,
    },
    {
      title: 'LinkedIn',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et. Euismod volutpat integer enim potenti litora, dui sodales ante.',
      icon: linkedin,
      percentage: 70,
      sentiment: 82,
      subjectivity: 15,
    },
    {
      title: 'Reddit',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et. Euismod volutpat integer enim potenti litora, dui sodales ante.',
      icon: reddit,
      percentage: 70,
      sentiment: 82,
      subjectivity: 15,
    },
    {
      title: 'Twitter',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et. Euismod volutpat integer enim potenti litora, dui sodales ante.',
      icon: twitter,
      percentage: 70,
      sentiment: 82,
      subjectivity: 15,
    },
    {
      title: 'Google',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et. Euismod volutpat integer enim potenti litora, dui sodales ante.',
      icon: google,
      percentage: 70,
      sentiment: 82,
      subjectivity: 15,
    },
  ];

  const handleSearchOnChange = (event) => {
    const text = event.target.value || '';
    const cleaned_text = text.trim().toLowerCase();
    const newItems = !!cleaned_text
      ? items.filter((item) => item.title.toLowerCase().indexOf(cleaned_text) >= 0)
      : [];
    console.log('handleSearchOnChange : ', cleaned_text, newItems);
    setSearch({
      search: text,
      cleaned_search: cleaned_text,
    });

    setAutoCompleteItems(newItems);
  };

  return (
    <Box>
      <Box display="flex">
        <Typography className={classes.title} variant="h5">
          Sentiment
        </Typography>
        <Box>
          <ButtonGroup buttons={['Stock', 'BlockChain']} currentTab={'Stock'}></ButtonGroup>
        </Box>
      </Box>
      <Box pt="1rem" display="flex" justifyContent="center">
        <AutoComplete
          onChange={handleSearchOnChange}
          placeholder="What is your ticker?"
          items={autoCompleteItems}
        />
      </Box>
      <Box pt="1rem" display="flex">
        <Box display="flex" flex="1" flexDirection="column">
          <Rating label="Subjectivity" value={56} />
          <Box pt="5px" />
          <Rating label="Sentiment" value={56} />
        </Box>
        <Box alignItems="center" display="flex" flex="1" justifyContent="center">
          <Box>
            <Typography>Total Score</Typography>
            <Typography variant="h6">6.8 out of 10</Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" p="30px 0" className={classes.listContainer}>
        {(props.data || []).map((item, i) => (
          <Box display="flex" m="15px 0" flex="1 1 auto" justifyContent="center">
            <SentimentCard decimelToPercent={props.decimelToPercent} {...item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Mobile;
