import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
    },
    headerImage: {
        width: "100%",
        height: 180,
        borderRadius: 10,
    },
    restaurantName: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
        color: "#333",
        textAlign: "center",
    },

    restaurantOpcao: {
        fontSize: 20,
        marginTop: 10,
        color: "#333",
    },

    restaurantDescri: {
        fontSize: 15,
        marginTop: 10,
        color: "#333",
    },

    menuItem: {
        flexDirection: "row",
        backgroundColor: "#f8f8f8",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    menuImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    menuText: {
        flex: 1,
    },
    menuTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#222",
    },
    menuDescription: {
        fontSize: 14,
        color: "#666",
        marginVertical: 4,
    },
    menuPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#e63946",
    },
    footer: {
        backgroundColor: "#333",
        padding: 10,
        marginTop: 20,
        alignItems: "center",
    },
    footerText: {
        color: "#fff",
        fontSize: 14,
        marginVertical: 2,
    },
});
