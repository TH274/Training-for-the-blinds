import React, { useEffect, useState } from 'react';
import { Text, View, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';

const ContactInfo = () => {
  const [facebook, setFacebook] = useState('');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.UrlAddresses, Contacts.Fields.SocialProfiles],
      });

      if (data.length > 0) {
        const contact = data[0];

        if (contact.urlAddresses && contact.urlAddresses.length > 0) {
          const urlAddress = contact.urlAddresses[0].url;
          setWebsite(urlAddress);
        }

        if (contact.socialProfiles && contact.socialProfiles.length > 0) {
          const socialProfile = contact.socialProfiles.find(
            (profile) => profile.service === Contacts.Fields.SocialProfileServiceFacebook
          );

          if (socialProfile) {
            const facebookUrl = socialProfile.url;
            setFacebook(facebookUrl);
          }
        }
      }
    }
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <Text>Facebook:  https://www.facebook.com/thanhbac201</Text>
      <Text onPress={() => openLink(facebook)}>{facebook}</Text>
    </View>
  );
};

export default ContactInfo;
