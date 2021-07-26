import { Box, Typography } from "@material-ui/core";
import AppButton from "../components/AppButton";
import { AppCard } from "../components/AppCard";
import { Page } from "../components/Page";
import { spacing } from "../theme";

export function Home() {
  return (
    <Page title="Introduction">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <AppCard style={{ maxWidth: 800, marginTop: 3 * spacing }}>
          <Typography variant="h5">React Task - Instructions</Typography>
          <Box display="flex" flexDirection="column">
            <Typography variant="body2" align="left">
              We would like you to implement a simple directory browser, using
              data from the following API: <br />
              <a
                href="https://randomuser.me/documentation#howto"
                target="_blank"
                rel="noreferrer"
              >
                API Documentation
              </a>
            </Typography>
            <Typography
              variant="body2"
              align="left"
              component="div"
              style={{ paddingTop: 2 * spacing }}
            >
              The following requirements should be met:
              <ol>
                <li>
                  The directory should be accessed via the /directory route
                  (leaving this page intact)
                </li>
                <li>
                  The main view should consist of a paginated list, showing a
                  thumbnail, name and city for each person
                </li>
                <li>
                  It should be possible to view more detail for any person
                  (either in a modal or detail panel) showing their address,
                  email, phone number and date of birth
                </li>
              </ol>
            </Typography>
            <Typography variant="body2" align="left" component="div">
              Consider the following in your implementation:
              <ul>
                <li>Loading state</li>
                <li>Styling (see theme.ts for hints)</li>
                <li>Use of React Hooks</li>
              </ul>
            </Typography>
            <Typography variant="body2" align="left" component="div">
              Extra credit for:
              <ul>
                <li>Adding a search / filter</li>
                <li>Tests</li>
                <li>Accessibility</li>
                <li>
                  Over-engineering - show off with some patterns and practices
                  you would use in a more complex app
                </li>
              </ul>
            </Typography>
            <Typography variant="body2" align="left"></Typography>
            <Typography align="left">
              You should aim to spend around 4 hours on the task. You may use
              more time if you want to, but no more than 8 hours in total - we
              would like to see a submission based on what you achieve in this
              time.
            </Typography>
            <Typography align="left">
              The level of role you are applying for (Junior/Mid/Senior) will be
              taken into consideration during review.
            </Typography>
            <AppButton href="/directory">Go to Directory</AppButton>
          </Box>
        </AppCard>
      </Box>
    </Page>
  );
}
