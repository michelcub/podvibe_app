import { Touchable, View, Text } from "react-native";

function ButtonBottonNavigationbar({icon, to }){
 
    const handlerNavigateTo = () => {
        this.props.navigation.navigate({to})
    }

    return(
        <Touchable onPress={handlerNavigateTo}>
            {icon}
        </Touchable>
    )
}