import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		padding: 30,
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
	exerciseContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 10,
	},
	exerciseDetails: {
		marginLeft: 10,
	},
	title: {
		fontSize: 16,
		marginBottom: 10,
	},
	text: {
		fontSize: 12,
	},
});

const WorkoutPlanDownload = ({ fitnessPlan }) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text style={styles.title}>Ready to workout?</Text>
				<View>
					{fitnessPlan.exercises.map((exercise, index) => (
						<View key={index} style={styles.exerciseContainer}>
							<View style={styles.exerciseDetails}>
								<Text style={styles.text}>{exercise.name}</Text>
								<Text style={styles.text}>{exercise.repetitions}</Text>
							</View>
						</View>
					))}
				</View>
			</View>
		</Page>
	</Document>
);

export default WorkoutPlanDownload;
