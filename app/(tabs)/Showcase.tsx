import { useState } from "react";
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ComponentShowcase() {
  const [count, setCount] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.title}>Component Showcase</Text>

      <Text style={styles.paragraph}>
        This screen demonstrates core React Native components: {" "}
        <Text style={styles.bold}>Text</Text>, <Text style={styles.bold}>Button</Text>,{" "}
        <Text style={styles.bold}>Image</Text>, and <Text style={styles.bold}>ScrollView</Text>.
      </Text>

      <Image
        style={styles.hero}
        source={require('@/assets/images/AerialCover.jpg')}
        resizeMode="cover"
      />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Counter</Text>
        <Text style={styles.counterText}>Count: {count}</Text>
        <View style={styles.row}>
          <View style={styles.buttonWrap}>
            <Button title="Increment" onPress={() => setCount((c) => c + 1)} />
          </View>
          <View style={styles.buttonWrap}>
            <Button title="Alert" onPress={() => Alert.alert("Hello!", "Button works ✅")} />
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Gundam Aerial - Scrollable Content</Text>
        <Text style={styles.paragraph}>
          Following the Vanadis Incident, the XGF-02 Gundam Lfrith, piloted by Elnora Samaya escaped to Mercury. It would be upgraded into a more refined and powerful mobile suit, resulting in the Gundam Aerial, and it is now the mobile suit where Ericht Samaya's life resides in. As the only mobile suit on Mercury, the Gundam Aerial would be piloted by Suletta Mercury growing up to undertake various utilitarian missions, including search and rescue.
        </Text>
        <Text style={styles.paragraph}>
          In A.S. 122 The Gundam Aerial would be sent to the Asticassia School of Technology as Suletta's personal mobile suit. After Suletta challenges Guel Jeturk to a sanctioned mobile duel, the Gundam Aerial would see its first combat sortie against MD-0032G Guel's Dilanza, albeit initially piloted by Miorine Rembran who had hijacked the Gundam. After Suletta takes to the field to reclaim the Gundam Aerial, she uses its Bit Staves to destroy Guel's Dilanza, winning the match. A following rematch against Guel sees the Gundam Aerial take on the AI-controlled MD-0064 Darilbalde, and despite interference by the Jeturk house including the use of the school's fire suppression system to weaken ranged beam attacks, the Aerial ultimately prevails.
        </Text>
        <Text style={styles.paragraph}>
          The next duel the Gundam Aerial would fight would be against Peil Technologies' FP/A-77 Gundam Pharact piloted by Elan Ceres in the space outside of the Academy. Due to the Gundam Pharact's specialty in high mobility space combat, the Gundam Aerial would deploy with the Mirasoul flight pack equipped to match the Pharact's mobility. Despite this upgrade the Gundam Aerial would struggle in the ensuing duel, until it unleashes a data storm that immobilizes the Pharact's remote weapons and distracts Elan long enough for Aerial's Bit Staves to deal the finishing blow.
        </Text>
        <Text style={styles.paragraph}>
          After a brief respite where the Aerial would be used as the mascot for the fledgling GUND-ARM， Inc.'s commercial pitch, the Aerial would see combat once more against the Grassley House in a 5 versus 5 team battle. To counteract the the Gundam Aerial's abilities the Grassley House's CEK-077 Beguir-Pente' would use their Antidote systems to disable the Gundam Aerial's GUND-Format, preventing it from using its Bit Staves. In turn, Suletta unlocks the Gundam Aerial's Permet Score to level 6, allowing it to override the Antidote system and use its Bit Staves to turn the tide of battle. Even then, the Gundam Aerial sustains heavy damage in its fight against Shaddiq Zenelli's CFK-029 Michaelis, and is only saved from defeat by the intervention of Earth House and Chuchu's Demi Trainer.
        </Text>
        <Text style={styles.paragraph}>
          With the Gundam Aerial severely damaged, it is sent to Prospera Mercury to be repaired and overhauled into the XVX-016RN Gundam Aerial Rebuild.

        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 16, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "700", marginTop: 8 },
  paragraph: { fontSize: 16, lineHeight: 22, color: "#333" },
  bold: { fontWeight: "700" },
  hero: { width: "100%", height: 200, borderRadius: 12, backgroundColor: "#eee" },
  card: { backgroundColor: "#f8f9fb", padding: 16, borderRadius: 12, gap: 8 },
  cardTitle: { fontSize: 18, fontWeight: "700" },
  counterText: { fontSize: 16 },
  row: { flexDirection: "row", gap: 12 },
  buttonWrap: { flex: 1 }
});
