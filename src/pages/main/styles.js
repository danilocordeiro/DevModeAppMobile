import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  backgroundColor: #FC6663;
  alignItems: center;
  justifyContent: center;
  borderBottomWidth: 10px;
  borderBottomColor: #DDD;
`;

const HeaderText = styled.Text`
  color: white;
  padding: 18px;
  fontSize: 16px;
`;

const Scroll = styled.ScrollView`
  flex: 1;
  marginBottom: 100px;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  zIndex: 10px;
`;

const FooterInput = styled.TextInput`
  color: #FFF;
  alignSelf: stretch;
  padding: 20px;
  backgroundColor: #252525;
  borderTopWidth: 2px;
  borderTopColor: #EDEDED;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  zIndex: 11px;
  right: 20px;
  bottom: 90px;
  backgroundColor: #FC6663;
  width: 90px;
  height: 90px;
  borderRadius: 100px;
  alignItems: center;
  justifyContent: center;
  elevation: 8px;
`;

const ButtonText = styled.Text`
  color: #FFF;
  fontSize: 24px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const WanrningMessage = styled.Text`
  textAlign: center;
  color: #FE2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

export { Container, Header, HeaderText, Scroll, Footer, FooterInput, Button, ButtonText, ErrorMessage, WanrningMessage };