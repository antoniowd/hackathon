import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Card,
  CardContent,
  TextField,
  Grid,
  Box,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Menu as MenuIcon } from "@material-ui/icons";
import sp from "../sp-municipios";

const dicas = [
  "Caso possível coloque um álcool gel na entrada da sua, esterilize as mãos assim que chegar",
  "Retire os sapatos ao entrar em casa",
  "É aconselhável lavar as roupas com sabão pós uso",
  "Lave as áreas com maior exposição: mãos, punhos e seu rosto. Ou tome banho quando possível",
  "Limpe seu celular com álcool 70, e óculos ou com água e sabão",
  "Após receber encomendas, ir ao mercado ou sair de casa para outras necessidades. Não se esqueça de lavar as mãos com água e sabão",
  "Esfregue as palmas com as mãos retas em sentido vai e vem",
  "Esfregue o dorso e entre os dedos de cada mão",
  "Faça uma concha com cada mão e esfregue uma na outra",
  "Lave as pontas dos dedos e as unhas de cada mão esfregando-os na palma da, outra mão",
  "Lave os polegares e os punhos",
  "Abra ou feche a torneira com os cotovelos",
  "Se você conversa por Libras, evite tocar no rosto durante a conversação",
  "Higienize sempre as mãos e o antebraço",
  "Evite sair de casa caso não haja necessidade, mas caso saia: sempre ande de máscara e leve álcool em gel com você caso possível",
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    maxWidth: 700,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  subtitle: {
    flexGrow: 1,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  autocomplete: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: 400,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
  },
  cardCasos: {
    border: `2px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(2),
  },
  boxCasos: {
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  boxCasosAlto: {
    backgroundColor: "#dd4b39",
    color: "#ffffff",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  boxCasosMedio: {
    backgroundColor: "#f39c12",
    color: "#ffffff",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  boxCasosBajo: {
    backgroundColor: "#00a65a",
    color: "#ffffff",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardMuertes: {
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    marginBottom: theme.spacing(2),
  },
  boxMuertes: {
    backgroundColor: "#ffffff",
    color: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardDicas: {
    border: `2px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [municipio, setMunicipio] = useState({});
  const [dicasIndex, setDicasIndex] = useState(
    Math.floor(Math.random() * dicas.length)
  );

  const handleChange = (e, option) => {
    setMunicipio({
      ...option,
      infectado_percent: parseFloat((option.casos * 100) / option.populacion),
      muertes_percent: parseFloat((option.muertes * 100) / option.populacion),
    });

    setDicasIndex(Math.floor(Math.random() * dicas.length));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Guardião do bem
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <Autocomplete
          className={classes.autocomplete}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          onChange={handleChange}
          options={sp}
          getOptionLabel={(o) => o.municipio}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Qual é seu município? "
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />

        {municipio.casos !== undefined && (
          <Card className={classes.cardCasos}>
            <CardContent>
              <Typography variant="h5" component="h2" color="primary">
                O total de confirmados até agora é
              </Typography>
              <Typography variant="h2" component="h1" color="primary">
                {municipio.casos}
              </Typography>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="body1" component="span" color="primary">
                    Porcento de pessoas infetadas
                  </Typography>
                  <Box className={classes.boxCasos} component="div" m={1}>
                    <Typography variant="h4" component="span">
                      {municipio.infectado_percent > 0
                        ? municipio.infectado_percent.toFixed(0)
                        : String(municipio.infectado_percent).slice(
                            0,
                            String(municipio.infectado_percent).indexOf(".") + 3
                          )}
                      %
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" component="span" color="primary">
                    Risco de contaminação
                  </Typography>
                  {municipio.infectado_percent >= 40 && (
                    <Box className={classes.boxCasosAlto} component="div" m={1}>
                      <Typography variant="h4" component="span">
                        Alto
                      </Typography>
                    </Box>
                  )}

                  {municipio.infectado_percent < 40 &&
                    municipio.infectado_percent >= 20 && (
                      <Box
                        className={classes.boxCasosMedio}
                        component="div"
                        m={1}
                      >
                        <Typography variant="h4" component="span">
                          Medio
                        </Typography>
                      </Box>
                    )}

                  {municipio.infectado_percent < 20 && (
                    <Box className={classes.boxCasosBajo} component="div" m={1}>
                      <Typography variant="h4" component="span">
                        Baixo
                      </Typography>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}

        {municipio.muertes !== undefined && (
          <Card className={classes.cardMuertes}>
            <CardContent>
              <Typography variant="h5" component="h2">
                O total de obitos até agora é
              </Typography>
              <Typography variant="h2" component="h1">
                {municipio.muertes}
              </Typography>
              <Typography variant="body1" component="span">
                Porcento de pessoas infetadas
              </Typography>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={6}>
                  <Box className={classes.boxMuertes} component="div" m={1}>
                    <Typography variant="h4" component="span">
                      {municipio.muertes_percent > 0
                        ? municipio.muertes_percent.toFixed(0)
                        : String(municipio.muertes_percent).slice(
                            0,
                            String(municipio.muertes_percent).indexOf(".") + 3
                          )}
                      %
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}

        <Card className={classes.cardDicas}>
          <CardContent>
            <Typography variant="h4" component="h2" color="primary">
              Uma dica
            </Typography>
            <Typography variant="h5" component="h1" color="primary">
              {dicas[dicasIndex]}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
