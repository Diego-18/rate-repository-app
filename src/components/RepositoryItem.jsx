import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats';
//import RepositoryItemHeader from './RepositoryItemHeader';
import theme from '../theme.js';

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
         <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
            </View>
            <View style={{ flex: 1 }}>
                <StyledText fontWeight="bold">{fullName}</StyledText>
                <StyledText color="secondary">{description}</StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>
         </View>
);

const RepositoryItem = (props) => (
	<View key={props.id} style={styles.container}>
	   <RepositoryItemHeader {...props} />
		<RepositoryStats {...props} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingVertical: 5,
	},
	language: {
	    padding: 4,
	    color: theme.colors.white,
	    backgroundColor: theme.colors.primary,
	    alignSelf: 'flex-end',
	    borderRadius: 4,
	    overflow: 'hidden',
	    marginVertical: 4,
	},
	image: {
        width: 48,
        height: 48,
        borderRadius: 4,
	}
});

export default RepositoryItem;
