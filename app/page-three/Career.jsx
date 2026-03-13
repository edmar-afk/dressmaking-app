import { View, Text } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import dressmakerVid from "../../assets/videos/dressmaker.mp4";
import tailorVid from "../../assets/videos/tailor.mp4";
import fashionDesignerVid from "../../assets/videos/fashionDesigner.mp4";
import alterationVid from "../../assets/videos/alteration.mp4";

const Career = () => {
  const dressmakerPlayer = useVideoPlayer(dressmakerVid, (player) => {
    player.loop = true;
  });

  const tailorPlayer = useVideoPlayer(tailorVid, (player) => {
    player.loop = true;
  });

  const fashionDesignerPlayer = useVideoPlayer(fashionDesignerVid, (player) => {
    player.loop = true;
  });

  const alterationPlayer = useVideoPlayer(alterationVid, (player) => {
    player.loop = true;
  });

  return (
    <View className="flex-1 px-4">
      <Text className="text-lg text-gray-600 mt-3 leading-7">
        Dressmaking offers a variety of career opportunities for individuals who
        have skills in sewing, garment construction, and fashion design. People
        who study dressmaking can work in different areas of the clothing and
        fashion industry, where they create, design, repair, and customize
        garments for clients.
      </Text>

      <View>
        <Text className="text-2xl font-bold mt-4">1. Dressmaker</Text>
        <VideoView
          player={dressmakerPlayer}
          nativeControls
          style={{
            width: "100%",
            height: 220,
            marginTop: 16,
            borderRadius: 12,
          }}
        />

        <Text className="text-lg text-gray-600 mt-4 leading-7">
          Dressmaking offers a variety of career opportunities for individuals
          who have skills in sewing, garment construction, and fashion design.
          People who study dressmaking can work in different areas of the
          clothing and fashion industry, where they create, design, repair, and
          customize garments for clients.
        </Text>
      </View>

      <View>
        <Text className="text-2xl font-bold mt-4">2. Tailor</Text>
        <VideoView
          player={tailorPlayer}
          nativeControls
          style={{
            width: "100%",
            height: 220,
            marginTop: 16,
            borderRadius: 12,
          }}
        />

        <Text className="text-lg text-gray-600 mt-4 leading-7">
          A tailor focuses on making, repairing, and adjusting garments to
          ensure they fit properly. Unlike mass-produced clothing, tailored
          garments are customized to match the exact body measurements of the
          customer. Tailors commonly work with suits, uniforms, coats, and other
          structured clothing. They are skilled in cutting patterns, sewing
          fabrics, and making alterations to improve comfort and appearance.
          This career requires precision, patience, and a deep understanding of
          fabrics and garment structure. Tailors can work in clothing shops,
          fashion houses, garment factories, or operate their own tailoring
          businesses.
        </Text>
      </View>

      <View>
        <Text className="text-2xl font-bold mt-4">2. Fashion Designer</Text>
        <VideoView
          player={fashionDesignerPlayer}
          nativeControls
          style={{
            width: "100%",
            height: 220,
            marginTop: 16,
            borderRadius: 12,
          }}
        />

        <Text className="text-lg text-gray-600 mt-4 leading-7">
          A fashion designer is responsible for creating new clothing styles,
          accessories, and fashion collections. They combine creativity with
          technical skills to design garments that follow fashion trends or
          introduce innovative styles. Fashion designers sketch their ideas,
          choose fabrics, develop patterns, and oversee the production process.
          They may work for fashion brands, clothing manufacturers, or start
          their own fashion label. This career offers opportunities to work in
          the fashion industry, participate in fashion shows, and influence
          clothing trends in society. Strong artistic ability, knowledge of
          textiles, and an understanding of fashion marketing are important in
          this profession.
        </Text>
      </View>

      <View>
        <Text className="text-2xl font-bold mt-4">
          2. Alteration Specialist
        </Text>
        <VideoView
          player={alterationPlayer}
          nativeControls
          style={{
            width: "100%",
            height: 220,
            marginTop: 16,
            borderRadius: 12,
          }}
        />

        <Text className="text-lg text-gray-600 mt-4 leading-7">
          An alteration specialist focuses on modifying and adjusting existing
          clothing to improve its fit, comfort, or style. They shorten hems,
          resize garments, repair damaged clothing, and adjust garments to match
          the customer’s body shape. This role is important in tailoring shops,
          clothing stores, and bridal boutiques where customers often need
          adjustments for ready-made clothing. Alteration specialists must have
          excellent sewing skills, precision, and attention to detail to ensure
          the final garment looks professional. This career is ideal for
          individuals who enjoy working with clothing and helping customers
          achieve the perfect fit for their garments.
        </Text>
      </View>
    </View>
  );
};

export default Career;
