package edp.davinci.model;

import lombok.Data;

import java.util.Date;

@Data
public class DavinciStaticOperation {


    private Long id;
    private Long user_id;
    private String email;
    private String action;
    private Long org_id;
    private Long project_id;
    private String project_name;
    private String viz_type;
    private Long viz_id;
    private String viz_name;
    private Long sub_viz_id;
    private String sub_viz_name;
    private Long widget_id;
    private String widget_name;
    private String variables;
    private String filters;
    private String groups;
    private Date create_time;

}
