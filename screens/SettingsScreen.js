import { StyleSheet, View, Text, Switch, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [privacyEnabled, setPrivacyEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.settingsList}>
        <View style={styles.settingItem}>
          <Ionicons name="notifications" size={24} color="#3c2eff" />
          <Text style={styles.settingText}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor="#fff"
            trackColor={{ false: "#ccc", true: "#9a2eff" }}
          />
        </View>

        <View style={styles.settingItem}>
          <Ionicons name="moon" size={24} color="#3c2eff" />
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={setDarkModeEnabled}
            thumbColor="#fff"
            trackColor={{ false: "#ccc", true: "#9a2eff" }}
          />
        </View>

        <View style={styles.settingItem}>
          <Ionicons name="lock-closed" size={24} color="#3c2eff" />
          <Text style={styles.settingText}>Enable Privacy Mode</Text>
          <Switch
            value={privacyEnabled}
            onValueChange={setPrivacyEnabled}
            thumbColor="#fff"
            trackColor={{ false: "#ccc", true: "#9a2eff" }}
          />
        </View>

        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="person" size={24} color="#3c2eff" />
          <Text style={styles.settingText}>Edit Profile</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="help-circle" size={24} color="#3c2eff" />
          <Text style={styles.settingText}>Help & Support</Text>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="log-out" size={24} color="#ff2e9a" />
          <Text style={[styles.settingText, { color: "#ff2e9a" }]}>
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3c2eff",
  },
  settingsList: {
    padding: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    minHeight: 80,
  },
  settingText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
    flex: 1,
  },
});
