import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Grid,
  Paper,
} from "@mui/material";
import { fetchUserProfiles } from "../services/profileService";
import PageLayout from "../components/PageLayout";

const Dashboard = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const getProfiles = async () => {
      try {
        const data = await fetchUserProfiles();
        setProfiles(data.profiles);
      } catch (err) {
        setError("Failed to fetch profiles. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    getProfiles();
  }, []);

  return (
    <PageLayout>
      {/* <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        backgroundColor: '#f5f5f5',
      }}
    > */}
      <Typography variant="h4" marginBottom={3}>
        Welcome to Your Dashboard
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Box>
          <Typography variant="h6" marginBottom={2}>
            Select a Profile:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {profiles.map((profile, index) => (
              <Grid item key={index}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setSelectedProfile(profile)}
                >
                  {profile}
                </Button>
              </Grid>
            ))}
          </Grid>

          {/* Display Selected Profile */}
          {selectedProfile && (
            <Paper
              elevation={3}
              sx={{ marginTop: 4, padding: 3, textAlign: "center" }}
            >
              <Typography variant="h5" marginBottom={2}>
                Selected Profile: {selectedProfile}
              </Typography>
              <Typography variant="body1">
                Here you can add or view data for {selectedProfile}.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: 2 }}
                onClick={() => alert(`Add data for ${selectedProfile}`)}
              >
                Add Data
              </Button>
            </Paper>
          )}
        </Box>
      )}
      {/* </Box> */}
    </PageLayout>
  );
};

export default Dashboard;
