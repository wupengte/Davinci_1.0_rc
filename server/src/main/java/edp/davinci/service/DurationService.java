package edp.davinci.service;


import edp.davinci.dto.staticDto.DurationInfo;
import edp.davinci.model.User;

public interface DurationService {

    DurationInfo getCurDur(User user);
}
