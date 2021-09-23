import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Box, Button } from "@chakra-ui/react";


function LogoutBtn(props) {

 

  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button
      ><Link to="/iniciasesion">
       Logout
      </Link>
      </Button>
      </Box>
  );
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout())
	}
}
export default connect(null, mapDispatchToProps)(LogoutBtn);
