import { h, Component } from "preact";
import { connect } from "preact-redux";
import I18n from "src/config/i18n";
import { Page, Main } from "src/components/Page";
import { Header } from "src/components/Header";
import { List, ListItem } from "src/components/NavList";
//import Counter from "../components/Counter";

export class WelcomePage extends Component {
  render({ counter, ...otherProps }) {
    return (
      <Page>
        <Header>
          <h1>{I18n.t("welcome.title")}</h1>
        </Header>
        <Main>
          <p>
            <strong>Example page transitions</strong>
          </p>
          <List>
            <ListItem href="/detail" icon="forward">
              Slide
            </ListItem>
            <ListItem href="/detail?transition=slideup" icon="forward">
              Slide up
            </ListItem>
            <ListItem href="/detail?transition=flip" icon="forward">
              Flip
            </ListItem>
          </List>
          <p>
            <strong>Example apps</strong>
          </p>
          <List>
            <ListItem href="/todo?transition=flip" icon="forward">
              Todo app
            </ListItem>
            <ListItem href="/counter?transition=flip" icon="forward">
              Counter app
            </ListItem>
          </List>
        </Main>
      </Page>
    );
  }
}
export default WelcomePage;
