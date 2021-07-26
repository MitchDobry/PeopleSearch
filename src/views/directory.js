import { Box } from "@material-ui/core";
import { AppCard } from "../components/AppCard";
import { Page } from "../components/Page";
import { spacing } from "../theme";
import Results from '../components/PeopleList'

function Directory() {
  return (
    <Page title="Introduction">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <AppCard style={{ maxWidth: 800, marginTop: 3 * spacing }}>
            <Results />
        </AppCard>
      </Box>
    </Page>
  )
}

export default Directory