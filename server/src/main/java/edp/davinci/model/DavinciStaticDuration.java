package edp.davinci.model;


import lombok.Data;

import java.util.Date;

@Data
public class DavinciStaticDuration {
    private Long id;

    private Long userId;

    private String email;

    private Long orgId;

    private Long projectId;

    private String projectName;

    private String vizType;

    private Long vizId;

    private String vizName;

    private Long subVizId;

    private String subVizName;

    private Date stratTime;

    private Date endTime;

}
