import { SnackbarProvider as _SnackbarProvider } from "notistack";
import { StyledMaterialDesignContent } from "./Snackbar";
import { CheckCircle, Error, Warning } from "@mui/icons-material";

export const SnackbarProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <_SnackbarProvider
      maxSnack={3}
      iconVariant={{
        success: <CheckCircle color="success" />,
        error: <Error color="error" />,
        warning: <Warning color="warning" />,
      }}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}
    >
      {children}
    </_SnackbarProvider>
  );
};

export default SnackbarProvider;
