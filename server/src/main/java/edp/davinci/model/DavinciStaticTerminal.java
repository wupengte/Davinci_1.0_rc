package edp.davinci.model;

import lombok.Data;

import java.util.Date;

@Data
public class DavinciStaticTerminal {

    private Long id;
    private Long userId;
    private String email;
    private String browserName;
    private String browserVersion;
    private String engineName;
    private String engineVersion;
    private String osName;
    private String osVersion;
    private String deviceModel;
    private String deviceType;
    private String deviceVendor;
    private String cpuArchitecture;
    private Date createTime;
}
