import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Radio,
  Typography,
} from '@material-ui/core';
import { Add, Visibility } from '@material-ui/icons';

import {
  Contained as ContainedButton,
  Outlined as OutlinedButton,
  Fab,
} from '../../components/Button';

import TextInput from '../../components/TextInput';
import Switch from '../../components/Switch';
import { ERROR, INFO, SUCCESS, WARNING } from '../../constants';
import Select from '../../components/Select';
import { useState } from 'react';

const Components = (props) => {
  const classes = useStyles();
  const [selected, setSelected] = useState('');

  const Item = (props) => <Box paddingTop="10px">{props.children}</Box>;

  return (
    <Box paddingY="100px">
      <Container>
        <Box>
          <Typography variant="h3">Buttons</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <ContainedButton>Contained</ContainedButton>
              </Item>
              <Item>
                <ContainedButton disabled>Disabled</ContainedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <ContainedButton secondary>Contained</ContainedButton>
              </Item>
              <Item>
                <ContainedButton secondary disabled>
                  Disabled
                </ContainedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <ContainedButton rounded>Rounded</ContainedButton>
              </Item>
              <Item>
                <ContainedButton disabled rounded>
                  Disabled
                </ContainedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <ContainedButton secondary rounded>
                  Secondary
                </ContainedButton>
              </Item>
              <Item>
                <ContainedButton secondary disabled rounded>
                  Disabled
                </ContainedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <OutlinedButton>Outlined</OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton disabled>Disabled</OutlinedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <OutlinedButton rounded>Outlined</OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton rounded disabled>
                  Disabled
                </OutlinedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <OutlinedButton secondary rounded>
                  Secondary
                </OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton secondary rounded disabled>
                  Disabled
                </OutlinedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <ContainedButton small>Small</ContainedButton>
              </Item>
              <Item>
                <ContainedButton>Normal</ContainedButton>
              </Item>
              <Item>
                <ContainedButton medium>Medium</ContainedButton>
              </Item>
              <Item>
                <ContainedButton large>Large</ContainedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <OutlinedButton small>Small</OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton>Normal</OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton medium>Medium</OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton large>Large</OutlinedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <ContainedButton rounded small>
                  Small
                </ContainedButton>
              </Item>
              <Item>
                <ContainedButton rounded>Normal</ContainedButton>
              </Item>
              <Item>
                <ContainedButton rounded medium>
                  Medium
                </ContainedButton>
              </Item>
              <Item>
                <ContainedButton rounded large>
                  Large
                </ContainedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <OutlinedButton rounded small>
                  Small
                </OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton rounded>Normal</OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton rounded medium>
                  Medium
                </OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton rounded large>
                  Large
                </OutlinedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <Fab IconButton={Add} />
              </Item>
              <Item>
                <Fab IconButton={Add} primary />
              </Item>
              <Item>
                <Fab IconButton={Add} secondary />
              </Item>
              <Item>
                <Fab disabled IconButton={Add} />
              </Item>
              <Item>
                <Fab disabled IconButton={Add} primary />
              </Item>
              <Item>
                <Fab disabled IconButton={Add} secondary />
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2} xs={12}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <OutlinedButton fullWidth>Full Width</OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton fullWidth rounded>
                  Full Width
                </OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton fullWidth secondary>
                  Full Width
                </OutlinedButton>
              </Item>
              <Item>
                <OutlinedButton fullWidth rounded secondary>
                  Full Width
                </OutlinedButton>
              </Item>
            </Box>
          </Grid>
          <Grid item spacing={2} xs={12}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <ContainedButton fullWidth>Full Width</ContainedButton>
              </Item>
              <Item>
                <ContainedButton fullWidth rounded>
                  Full Width
                </ContainedButton>
              </Item>
              <Item>
                <ContainedButton fullWidth secondary>
                  Full Width
                </ContainedButton>
              </Item>
              <Item>
                <ContainedButton fullWidth rounded secondary>
                  Full Width
                </ContainedButton>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box>
          <Typography variant="h3">Text Inputs</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <TextInput placeholder="Placeholder" label="Label" conditions={['Status']} />
              </Item>
              <Item>
                <TextInput placeholder="Placeholder" />
              </Item>
              <Item>
                <TextInput
                  placeholder="Placeholder"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment className={classes.inputAdornment} position="end">
                        <IconButton aria-label="toggle password visibility">
                          <Visibility fontSize="small" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Item>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <TextInput
                  placeholder="Placeholder"
                  label="Label"
                  inputState={SUCCESS}
                  conditions={['Success']}
                />
              </Item>
              <Item>
                <TextInput
                  placeholder="Placeholder"
                  label="Label"
                  inputState={ERROR}
                  conditions={['Error']}
                />
              </Item>
              <Item>
                <TextInput
                  placeholder="Placeholder"
                  label="Label"
                  inputState={WARNING}
                  conditions={['Warning']}
                />
              </Item>
            </Box>
          </Grid>
          <Grid item>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Item>
                <TextInput
                  multiline
                  maxRows={4}
                  rows={4}
                  placeholder="Placeholder"
                  label="Textarea"
                  inputState={INFO}
                  conditions={['Info']}
                />
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box>
          <Typography variant="h3">Selectors</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item>
            <Item>
              <FormControlLabel control={<Switch />} label="Switch" />
            </Item>
            <Item>
              <FormControlLabel control={<Checkbox color="primary" />} label="Checkbox" />
            </Item>
            <Item>
              <FormControlLabel control={<Radio />} label="Radio" />
            </Item>
          </Grid>
        </Grid>
        <Grid xs={4} item>
          <Item>
            <Select
              id="selectId"
              placeholder="Dropdown"
              value={selected || ''}
              onChange={(e) => setSelected(e.target.value)}
              options={[
                { label: 'Option 1', value: 1 },
                { label: 'Option 2', value: 2 },
                { label: 'Option 3', value: 3 },
              ]}
            />
          </Item>
        </Grid>
      </Container>
    </Box>
  );
};

export default Components;

const useStyles = makeStyles((theme) => ({
  inputAdornment: {
    height: '2.5rem',
    width: '2.5rem',
    marginRight: '-8px',

    '& button': {
      height: 'inherit',
      width: 'inherit',
    },
  },
}));
